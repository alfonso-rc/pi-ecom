import "./App.css";
import axios from 'axios';
import Home from "./componentes/Home";
import ArticleDetail from "./componentes/Detail";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import LandingPage from "./componentes/LandingPage";
import Example from "./componentes/Login";
import NewUser from "./componentes/newUser";
import CheckoutForm from "./componentes/buy";
import AdminHome from "./componentes/Admin/Pages/AdminHome";
import ArticleList from "./componentes/Admin/Pages/ArticleList"
import UserList from "./componentes/Admin/Pages/UserList"
import Offer from "./componentes/Admin/Pages/Offer";
import NotFound from'./componentes/NotFound';
import { useEffect, useState } from "react";

function App() {

  //const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:3001/google`;
			const { data } = await axios.get(url, { withCredentials: true });
      console.log(data);
			//setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);


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
          <Route path="*" component={NotFound}/>
         {/*  <Redirect to="/not-found"/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
