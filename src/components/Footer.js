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
};

function Footer() {
  return (
    <div style={Style.Container}>
      <div style={{ width: "50%" }}>
        <img src={lightLogo} alt={"Logo of Website"} />
      </div>

      <div style={Style.subContainer}>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Contact Us</p>
        <p>Careers</p>
      </div>
    </div>
  );
}

export default Footer;
