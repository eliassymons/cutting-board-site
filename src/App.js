import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import RouteTree from "./RouteTree.jsx";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <RouteTree />
      </HashRouter>
    </div>
  );
}

export default App;
