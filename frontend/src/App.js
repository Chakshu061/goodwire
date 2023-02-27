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

import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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


      </Routes>
      

      <Footer />
    </Router>
    

  );
}

export default App;
