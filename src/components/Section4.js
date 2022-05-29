import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import socialImg from "../Assets/social_links.svg";
const Style = {
  Container: {
    height: "80vh",
    width: "100%",
    backgroundColor: "#FAFAFA",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 5%",
  },
  h1: {
    fontSize: "60px",
    fontWeight: "normal",
  },
  p: {
    fontSize: "30px",
  },
};

function Section4() {
  return (
    <div style={Style.Container}>
      <div style={{ textAlign: "center" }}>
        <h1 style={Style.h1}>Social Media Links</h1>
        <p style={Style.p}>Feel Free To Contact Us</p>
      </div>

      <img src={socialImg} alt={"Logo of Website"} />

      <button
        style={{
          backgroundColor: "#1C55C9",
          border: "none",
          color: "white",
          padding: "20px 40px",
          borderRadius: "40px",
          fontSize: "50px",
          fontFamily: "Chakra Petch",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Section4;
