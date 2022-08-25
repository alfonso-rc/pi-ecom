import "./App.css";
import Home from "./componentes/Home";
import ArticleDetail from "./componentes/Detail";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./componentes/LandingPage";
import Example from "./componentes/Login";
import NewUser from "./componentes/newUser";
import buy from "./componentes/buy";
import Admin from "./componentes/Admin/Admin";
import CheckoutForm from "./componentes/buy"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path= "/checkout" component={buy}/>
          <Route exact path="/newUser" component={NewUser}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Example} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path ="/pago" component={CheckoutForm}/>
          <Route path="/:id" component={ArticleDetail} />
          <Route exact path="/" component={LandingPage} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
