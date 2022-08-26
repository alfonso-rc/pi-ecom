import "./App.css";
import Home from "./componentes/Home";
import ArticleDetail from "./componentes/Detail";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./componentes/LandingPage";
import Example from "./componentes/Login";
import NewUser from "./componentes/newUser";
import buy from "./componentes/buy";
import AdminHome from "./componentes/Admin/Pages/AdminHome";
import ArticleList from "./componentes/Admin/Pages/ArticleList"
import UserList from "./componentes/Admin/Pages/UserList"
import Offer from "./componentes/Admin/Pages/Offer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path= "/checkout" component={CheckoutForm}/>
          <Route exact path="/newUser" component={NewUser}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Example} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/articulos" component={ArticleList}/>
          <Route exact path="/admin/usuarios" component={UserList}/>
          <Route exact path="/admin/ofertas"  component={Offer}/>
          <Route path="/:id" component={ArticleDetail} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
