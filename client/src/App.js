import "./App.css";
import Home from "./componentes/Home";
import ArticleDetail from "./componentes/Detail";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import LandingPage from "./componentes/LandingPage";
import Example from "./componentes/Login";
import NewUser from "./componentes/newUser";
import CheckoutForm from "./componentes/buy";
import AdminHome from "./componentes/Admin/Pages/AdminHome";
import ArticleList from "./componentes/Admin/Article"
import UserList from "./componentes/Admin/Users"
import Offer from "./componentes/Admin/Pages/Offer";
import Create from './componentes/Admin/Pages/CreateArticle';
import NotFound from'./componentes/NotFound';
import InfoUser from "./componentes/LoginComponents/InfoUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route path= "/checkout" component={CheckoutForm}/>
          <Route exact path="/newUser" component={NewUser}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Example} />
          <Route exact path="/perfil" component={InfoUser} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/articulos" component={ArticleList}/>
          <Route exact path="/admin/usuarios" component={UserList}/>
          <Route exact path="/admin/ofertas"  component={Offer}/>
          
          <Route exact path="/admin/articulos/create"  component={Create}/>

          <Route path="/:id" component={ArticleDetail} />
          <Route exact path="/" component={LandingPage} />
          <Route path="*" component={NotFound}/>
         {/*  <Redirect to="/not-found"/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
