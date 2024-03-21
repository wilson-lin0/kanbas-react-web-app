import ModuleList from "./List";
import "./index.css";

function Modules() {
  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', zIndex: 999 }}>
        <h1>Modules</h1>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;