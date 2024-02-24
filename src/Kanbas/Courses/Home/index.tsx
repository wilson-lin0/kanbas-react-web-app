import ModuleList from "../Modules/List";

function Home() {
  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', zIndex: 999 }}>
      </div>
      <ModuleList />
    </div>
  );
}
export default Home;