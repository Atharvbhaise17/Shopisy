import React, { Fragment } from 'react'
import "./footer.css"
import playstore from '../../../images/playStore.webp'
import appstore from '../../../images/appStore.jfif'
const Footer = () => {
  return (
   <Fragment>
   <footer id = "down">
   <div className="leftFooter">
    <h4>Download our App</h4>
    <p>Download app for Android and IOS mobile </p>
    <img src={playstore} alt='playstore'></img>
    <img src={appstore} alt='appstore'></img>
    </div>

    <div className="midFooter">
    <h1>Shopisy</h1>
    <p>High Quality is our first priority </p>
    <p>copyrights&copy; bhaiseatharv@gmail.com</p>
    </div>

    <div className="rightFooter">
    <h4>Follow us</h4>
     <a href='https://www.instagram.com/' alt='err'>Instagram</a>
     <a href='https://www.facebook.com/' alt='err'>Facebook</a>
     <a href='https://in.linkedin.com/' alt='err'>LinkedIn</a>
    </div>
    </footer>
   </Fragment>
    
  );
}

export default Footer;