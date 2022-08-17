import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import RouteTree from "./RouteTree.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouteTree />
      </BrowserRouter>
    </div>
  );
}

export default App;
