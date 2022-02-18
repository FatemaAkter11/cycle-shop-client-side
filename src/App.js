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
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import NotFound from './Pages/Home/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import UpdateProduct from './Pages/UpdateProduct/UpadateProduct';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/productDetails/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/update/:id">
              <UpdateProduct></UpdateProduct>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
