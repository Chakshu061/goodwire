import './App.css';
import axios from "axios";
import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import  Search  from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from "./component/Cart/Payment";
import Dashboard from "./component/Admin/Dashboard";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import NotFound from "./component/layout/Not Found/NotFound";


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return(

    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/product/:id" element={ <ProductDetails /> } />
         <Route exact path="/products" element={ <Products/> } />
         <Route path="/products/:keyword" element={ <Products/> } />
         <Route exact path="/search" element={ <Search /> }  />
         <Route exact path="/login" element={<LoginSignUp />} />
         <Route exact path="/account" element={isAuthenticated && <UserOptions user={user} /> ? <Profile/> : <Navigate to="/login" />} />
         
         <Route exact path="/me/update" element={isAuthenticated && <UserOptions user={user} /> ? <UpdateProfile/> : <Navigate to="/login" />} />

         <Route exact path="/password/update" element={isAuthenticated && <UserOptions user={user} /> ? <UpdatePassword/> : <Navigate to="/login" />} />

         <Route exact path="/password/forgot" element={<ForgotPassword/>} />

         <Route exact path="/password/reset/:token" element = {<ResetPassword/>} />

         <Route exact path="/cart" element={<Cart/>} />
        
         <Route exact path="/login/shipping" element={isAuthenticated && <UserOptions user={user} /> ? <Shipping/> : <Navigate to="/login" />} />

        

         <Route exact path="/process/payment" element={isAuthenticated && <UserOptions user={user} /> ? <Payment/> : <Navigate to="/login" />} />
           

         <Route exact path="/success" element={isAuthenticated && <UserOptions user={user} /> ? <OrderSuccess/> : <Navigate to="/login" />} />

         <Route exact path="/orders" element={isAuthenticated && <UserOptions user={user} /> ? <MyOrders/> : <Navigate to="/login" />} />

         <Route exact path="/order/:id" element={isAuthenticated && <UserOptions user={user} /> ? <OrderDetails/> : <Navigate to="/login" />} />

         <Route exact path="/order/confirm" element={isAuthenticated && <UserOptions user={user} /> ? <ConfirmOrder/> : <Navigate to="/login" />} />

         <Route exact path="/admin/dashboard" element={isAuthenticated && <UserOptions user={user} /> ? <Dashboard/> : <Navigate to="/login" />} />

         <Route exact path="/admin/products" element={isAuthenticated && <UserOptions user={user} /> ? <ProductList/> : <Navigate to="/login" />} />

         <Route exact path="/admin/product" element={isAuthenticated && <UserOptions user={user} /> ? <NewProduct/> : <Navigate to="/login" />} />

         <Route exact path="/admin/product/:id" element={isAuthenticated && <UserOptions user={user} /> ? <UpdateProduct/> : <Navigate to="/login" />} />

         <Route exact path="/admin/orders" element={isAuthenticated && <UserOptions user={user} /> ? <OrderList/> : <Navigate to="/login" />} />

         <Route exact path="/admin/order/:id" element={isAuthenticated && <UserOptions user={user} /> ? <ProcessOrder/> : <Navigate to="/login" />} />

         <Route exact path="/admin/users" element={isAuthenticated && <UserOptions user={user} /> ? <UsersList/> : <Navigate to="/login" />} />

         <Route exact path="/admin/user/:id" element={isAuthenticated && <UserOptions user={user} /> ? <UpdateUser/> : <Navigate to="/login" />} />

         <Route exact path="/admin/reviews" element={isAuthenticated && <UserOptions user={user} /> ? <ProductReviews/> : <Navigate to="/login" />} />

         <Route element={ window.location.pathname=== "/payment/process" ? null : <NotFound/>} />

      </Routes>
      

      <Footer />
    </Router>
    

  );
}

export default App;
