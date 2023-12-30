import "./App.scss";
import Home from "./components/Home";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="flex ">
      <div className="fixed h-full w-[34]">
        <SideBar />
      </div>
      <div className="flex-grow">
        <Home />
      </div>
    </div>
  );
}

export default App;
