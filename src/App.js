import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Menubar from './Pages/Home/Shared/Menubar/Menubar/Menubar';
import AllProducts from './Pages/Home/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allProduct">
            <AllProducts></AllProducts>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
