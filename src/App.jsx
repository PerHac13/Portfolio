import "./App.scss";
import Home from "./components/Home";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
