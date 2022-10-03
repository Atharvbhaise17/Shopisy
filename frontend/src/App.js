
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

function App() {
  

  const {isAuthenticated,user} = useSelector(state => state.user);

  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })

    store.dispatch(loadUser())
  }, [])
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
      
      
      
      

      </Routes>

    
    </BrowserRouter>


  );
}

export default App;
