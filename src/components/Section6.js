import React from "react";

const Style = {
  Container: {
    height: "55vh",
    width: "100%",
    backgroundColor: "#1C55C9",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 5%",
  },
  h1: {
    fontSize: "60px",
    paddingBottom: "0px",
    marginBottom: "0px",
  },
  p: {
    fontWeight: "bold",
    fontSize: "50px",
    marginTop: "0px",
    color: "black",
  },
};

function Section6() {
  return (
    <div style={Style.Container}>
      <div style={{ textAlign: "center" }}>
        <h1 style={Style.h1}>Join us on email for</h1>
        <p style={Style.p}>more information</p>
      </div>

      <button
        style={{
          backgroundColor: "white",
          border: "none",
          color: "black",
          padding: "20px 60px",
          borderRadius: "50px",
          fontFamily: "Chakra Petch",
          fontSize: "30px",
        }}
      >
        Join Now
      </button>
    </div>
  );
}

export default Section6;
