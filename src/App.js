import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddProduct from './Pages/Products/AddProduct/AddProduct';
import ExploreMore from './Pages/Products/ExploreMore/ExploreMore';
import Products from './Pages/Products/Produtcs/Products';
import PlaceOrder from './Pages/Orders/PlaceOrder/PlaceOrder';
import MyOrders from './Pages/Orders/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
    
     <AuthProvider>
     <Router>
        <Navigation></Navigation>
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
          <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/explore">
            <ExploreMore></ExploreMore>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <PrivateRoute path="/placeOrder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
           <MyOrders></MyOrders>
          </PrivateRoute>
        </Switch>
      </Router>
     </AuthProvider>
    
    </div>
  );
}

export default App;
