import React, { Fragment } from 'react'
import { ReactNavbar } from 'overlay-navbar';
 import { AiOutlineSearch } from "react-icons/ai";
 import { CgProfile } from "react-icons/cg";
 import { BsFillCartCheckFill } from "react-icons/bs";
import logo from "../../../images/atharv.png"


const options = {
  burgerColorHover : "#eb4034",
  logoWidth : "20vmax",
  navColor1 : "#424242",
  logoHoverSize : "10px",
  logoHoverColor : "#eb4034",
  link1Text : "Home",
  link2Text : "Products",
  link3Text : "Contact",
  link4Text : "About",
  link1Url : "/",
  link2Url : "/products",
  link3Url : "/contact",
  link4Url : "/about",
  link1Size :	"1.3vmax",
  link1Color : "black",
  nav1justifyContent : "flex-end",
  nav2justifyContent : "flex-end",
  nav3justifyContent : "flex-start",
  nav4justifyContent : "flex-start",
  link1ColorHover : "#eb4034",
  link1Margin : "1vmax",
  profileIconUrl :"/login",
  profileIconColor : "black",
  searchIconColor :  "black",
  cartIconColor :  "black",
  searchIconColorHover : "#eb4034",
  cartIconColorHover :  "#eb4034",
  profileIconColorHover :  "#eb4034",
  cartIconMargin : "1vmax",
 
}

const Header = () => {
  return (
    <Fragment >
    <ReactNavbar {...options}
 
    logo = {logo}
    searchIcon =  {true}
    cartIcon  = {true}
    profileIcon  =  {true}
    SearchIconElement = {AiOutlineSearch}
    CartIconElement = {BsFillCartCheckFill}
    ProfileIconElement = {CgProfile}
    />
 
    
    
    </Fragment>
  )
}

export default Header