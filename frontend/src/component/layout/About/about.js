import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/atharv-bhaise-98036321b/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dpnqqbzk5/image/upload/v1668588700/avatars/atharv_ppdbpc.jpg"
              alt="Founder"
            />
            <Typography>Atharv Bhaise</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This wesbite is made by @meatharvbhaise. this is a E-Commerce webiste of clothing
              by which you can buy a good products .
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>

            <a href="https://instagram.com/atharvbhaise_17" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://www.linkedin.com/in/atharv-bhaise-98036321b/" target="blank">
              <LinkedInIcon className="LinkedInSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;