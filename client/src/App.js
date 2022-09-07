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
import OfferList from "./componentes/Admin/Offer";
import CreateOffer from "./componentes/Admin/Pages/CreateOffer";
import Create from './componentes/Admin/Pages/CreateArticle';
import NotFound from'./componentes/NotFound';
import InfoUser from "./componentes/LoginComponents/InfoUser";
import MisCompras from "./componentes/MyShopping";
import EditArticle from "./componentes/Admin/Pages/EditArticle";
import AboutUs from "./componentes/AboutUs";
import St from "./componentes/Admin/St";
import Favoritos from "./componentes/Favoritos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route path= "/checkout" component={CheckoutForm}/>
          <Route exact path="/newUser" component={NewUser}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/favoritos" component={Favoritos} />
          <Route exact path="/login" component={Example} />
          <Route exact path="/perfil" component={InfoUser} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/articulos" component={ArticleList}/>
          <Route exact path="/admin/articulos/edit/:id" component={EditArticle}/>
          <Route exact path="/admin/usuarios" component={UserList}/>
          <Route exact path="/admin/ofertas"  component={OfferList}/>
          <Route exact path="/admin/ofertas/create"  component={CreateOffer}/>
          <Route exact path="/admin/st"  component={St}/>
          <Route exact path="/myShoppings" component={MisCompras}/>
          
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
