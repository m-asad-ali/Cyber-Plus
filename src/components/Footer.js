import React from "react";
import lightLogo from "../Assets/Logo/logo_light.svg";

const Style = {
  Container: {
    height: "10vh",
    width: "100%",
    backgroundColor: "#FAFAFA",
    color: "black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 5%",

    // marginLeft: "5%",
    // marginRight: "5%",
  },
  subContainer: {
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
};

function Footer() {
  return (
    <div style={Style.Container}>
      <div style={{ width: "50%" }}>
        <img src={lightLogo} alt={"Logo of Website"} />
      </div>

      <div style={Style.subContainer}>
        <a style={Style.link} href="/">
          Privacy Policy
        </a>
        <a style={Style.link} href="/">
          Terms and Conditions
        </a>
        <a style={Style.link} href="/">
          Contact Us
        </a>
        <a style={Style.link} href="/">
          Careers
        </a>
      </div>
    </div>
  );
}

export default Footer;
