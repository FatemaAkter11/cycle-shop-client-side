import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Menubar from './Pages/Home/Shared/Menubar/Menubar/Menubar';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/allProduct">
            <AllProducts></AllProducts>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
