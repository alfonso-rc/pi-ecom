import "./App.css";
import Home from "./componentes/Home";
import ArticleDetail from "./componentes/Detail";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./componentes/LandingPage";
import Example from "./componentes/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Example} />
          <Route path="/:id" component={ArticleDetail} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
