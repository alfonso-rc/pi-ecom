import './App.css';
import Home from './componentes/Home';

import { Route, Switch, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}>
      </Route>
      {/* <Route path="/:id" element={</>}> */}
      {/* </Route> */}
      {/* <Route path="/add" element={</>}>
      </Route> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
