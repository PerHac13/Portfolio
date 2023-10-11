import "./App.scss";
import Home from "./components/Home";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="flex relative flex-col gap-x-3 m-0">
      <div>
        <SideBar />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
