import React from "react";
import logo from "../Assets/Logo/logo.svg";

const Style = {
  Container: {
    height: "10vh",
    width: "100%",
    backgroundColor: "#000000",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
  },
  subContainer: {
    display: "flex",
    width: "30%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

function Navbar() {
  return (
    <div style={Style.Container}>
      <div>
        <img src={logo} alt={"Logo of Website"} />
      </div>

      <div style={Style.subContainer}>
        <a style={Style.link} href="/">
          About
        </a>

        <a style={Style.link} href="/">
          How it work
        </a>
        <a style={Style.link} href="/">
          Pricing
        </a>
        <a style={Style.link} href="/">
          Solution
        </a>
        <a style={Style.link} href="/">
          Features
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "15%",
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            border: "none",
            color: "white",
            fontSize: "15px",
          }}
        >
          Login
        </button>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            color: "black",
            padding: "10px 20px",
            borderRadius: "25px",
            fontSize: "15px",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
