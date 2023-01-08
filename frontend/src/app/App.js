import "./App.css";
import Home from "./Home";
import Types from "./Types";
import { Route } from "react-router-dom";
import Appbar from "./Appbar";
import Results from "../results/Results";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/types" component={Types} />
      <Route exact path="/results" component={Results} />
    </div>
  );
}

export default App;
