import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
  ];
  const { pathname } = useLocation();

  return (
    <div className="kanbas-navigation-container">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.label}`}
          className={"kanbas-navigation-item" + (pathname.includes(link.label) ? " wd-active" : "")}
        >
          {link.icon}
          <span className="kanbas-navigation-label">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;