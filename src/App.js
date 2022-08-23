import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import RouteTree from "./RouteTree.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RouteTree />
      </Router>
    </div>
  );
}

export default App;
