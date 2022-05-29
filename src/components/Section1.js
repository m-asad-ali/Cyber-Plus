import React from "react";
import cyberImg from "../Assets/Cyber-Security-PNG-Transparent-HD-Photo.png";
const Style = {
  Container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#000000",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
  },
  h1: {
    fontSize: "75px",
    textTransform: "uppercase",
  },
  p: {
    fontSize: "45px",
  },
  imgContainer: {
    height: "100vh",

    padding: "auto",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
};

function Section1() {
  return (
    <div style={Style.Container}>
      <div style={{ width: "55%" }}>
        <h1 style={Style.h1}>Cyber Security</h1>
        <p style={Style.p}>
          is much more than a matter of information technology.
        </p>
        <button
          style={{
            backgroundColor: "#1C55C9",
            border: "none",
            color: "white",
            padding: "20px 40px",
            borderRadius: "40px",
            fontFamily: "Chakra Petch",
            fontSize: "50px",
          }}
        >
          Get Started
        </button>
      </div>

      <div style={Style.imgContainer}>
        <img
          style={{ width: "500px" }}
          src={cyberImg}
          alt={"Logo of Website"}
        />
        <div>
          <p
            style={{
              backgroundColor: "#1C55C9",
              border: "none",
              color: "white",
              padding: "10px",
              borderRadius: "20px",
              fontSize: "20px",
              textAlign: "center",
              width: "250px",
              height: "40px",
            }}
          >
            Drop Down To See More
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
