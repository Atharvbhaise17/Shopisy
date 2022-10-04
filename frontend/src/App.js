
import './App.css';
import Header from './component/layout/Header/header.js'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import webFont from "webfontloader";
import React, { Fragment } from 'react';
import Footer from './component/layout/Footer/footer';
import Home from './component/Home/Home.js'
import ProductDetails from './component/Product/ProductDetails.js'
import Products from './component/Product/Products.js'
import Search from './component/Product/Search.js'
import LoginSignUp from './component/User/LoginSignUp';
import store from './store'
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions.js'
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile.js'
import UpdateProfile from './component/User/UpdateProfile.js'
import UpdatePassword from './component/User/UpdatePassword.js'
import ForgotPassword from './component/User/ForgotPassword'
import ResetPassword from './component/User/ResetPassword.js'
import Cart from './component/Cart/Cart.js'
import Shipping from './component/Cart/Shipping.js'
import ConfirmOrder from './component/Cart/ConfirmOrder.js'
import { axios } from 'axios';
import { useState , useEffect} from 'react';
import Payment from './component/Cart/Payment.js'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from './component/Cart/OrderSuccess.js'
import MyOrders from './component/Order/MyOrders.js'
import OrderDetails from './component/Order/OrderDetails.js'

function App() {
  const {isAuthenticated,user} = useSelector(state => state.user);
  
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
   

    setStripeApiKey("pk_test_51LopGfSJr6935QWXDjs8R7tNuw97331HyAJat8FufSZEao4CfnzXvxVbc8TdwfHffgDKyXnfmq4THiDkr963ZofR004QLvBCMB");
  }

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (

    <BrowserRouter>
      
    {isAuthenticated &&  <UserOptions user={user} />}
    <Routes>
        <Route path="/" element={
          <Fragment>
          <Header />
            <Home />
            <Footer />
          </Fragment>
        } />

        <Route exact path="/product/:id" element={
          <Fragment>
          <Header />
            <ProductDetails />
            <Footer />
          </Fragment>
        } />


        <Route exact path="/products" element={
          <Fragment>
          <Header />
            <Products />
            <Footer />
          </Fragment>
        } />


        <Route path="/products/:keyword" element={
          <Fragment>
          <Header />
            <Products />
            <Footer />
          </Fragment>
        } />


        <Route exact path="/search" element={
          <Fragment>
          <Header />
            <Search />
            <Footer />
          </Fragment>
        } />

        <Route exact path="/login" element={
          <Fragment>
          <Header />

            <LoginSignUp />
            <Footer />
          </Fragment>
        } />


        <Route exact path="/account" element={
          <Fragment>
          <Header />
          {isAuthenticated ? <Profile user={user}/> : <Navigate to="/login" /> }  
          <Footer/>
            </Fragment>
            
        } />

        <Route exact path="/me/update" element={
          <Fragment>
          <Header />
          {isAuthenticated ? <UpdateProfile user={user}/> : <Navigate to="/account" /> }
          <Footer/>
            </Fragment>
             
        } />


        <Route exact path="/password/update" element={
          <Fragment>
          <Header />
          {isAuthenticated ? <UpdatePassword user={user}/> : <Navigate to="/account" /> }
          <Footer/>
            </Fragment>
             
        } />


        <Route exact path="/password/forgot" element={
          <Fragment>
          <Header />
         <ForgotPassword /> 
          <Footer/>
            </Fragment>
             
        } />

        <Route exact path="/password/reset/:token" element={
          <Fragment>
          <Header />
         <ResetPassword /> 
          <Footer/>
            </Fragment>
             
        } />

        <Route exact path="/Cart" element={
          <Fragment>
          <Header />
         <Cart /> 
          <Footer/>
            </Fragment>
             
        } />
      
      
      
        <Route exact path="/login/shipping" element={
          <Fragment>
          <Header />
          {isAuthenticated ? <Shipping user={user}/> : <Navigate to="/account" /> }
          <Footer/>
            </Fragment>
             
        } />

        <Route exact path="/order/confirm" element={
          <Fragment>
          <Header />
          {isAuthenticated ? <ConfirmOrder user={user}/> : <Navigate to="/account" /> }
          <Footer/>
            </Fragment>
             
        } />


       
         

        
      {stripeApiKey && <Route exact path="/process/payment" element={<Elements stripe={loadStripe(stripeApiKey)}>
      <Fragment>
      <Header />
      <Payment/>
      <Footer />
      </Fragment>
      </Elements>}/>}


      
      <Route exact path="/success" element={
        <Fragment>
        <Header />
        {isAuthenticated ? <OrderSuccess user={user}/> : <Navigate to="/login" /> }  
        <Footer/>
          </Fragment>
          
      } />

      <Route exact path="/orders" element={
        <Fragment>
        <Header />
        {isAuthenticated ? <MyOrders user={user}/> : <Navigate to="/login" /> }  
        <Footer/>
          </Fragment>
          
      } />


      <Route exact path="/order/:id" element={
        <Fragment>
        <Header />
        {isAuthenticated ? <OrderDetails user={user}/> : <Navigate to="/login" /> }  
        <Footer/>
          </Fragment>
          
      } />
        
        



       
      
      
      
      

      </Routes>

    
    </BrowserRouter>


  );
}

export default App;
