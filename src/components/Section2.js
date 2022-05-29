import React from "react";

const Style = {
  Container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#1C55C9",
    color: "white",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    alignItems: "center",
    padding: "0 5%",
  },
  h1: {
    fontSize: "60px",
    textTransform: "uppercase",
    margin: "5px",
  },

  whiteBox: {
    backgroundColor: "white",
    borderRadius: "25px",
    height: "30%",
    minWidth: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: "15%",
  },
  blackBox1: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "15px",
    minHeight: "5%",
    maxWidth: "40%",
    textAlign: "center",
    fontSize: "20px",
    boxSizing: "content-box",
    position: "absolute",
    padding: "0 30px",

    top: "165%",
    right: "20%",
  },
  blackBox2: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "15px",
    minHeight: "5%",
    maxWidth: "40%",
    textAlign: "center",
    fontSize: "20px",
    boxSizing: "content-box",
    position: "absolute",
    padding: "0 10px",

    top: "175%",
    left: "20%",
  },
};

function Section2() {
  return (
    <div style={Style.Container}>
      <div style={{ textAlign: "center", marginTop: "5%" }}>
        <h1 style={Style.h1}>The fatest</h1>
        <h1 style={Style.h1}>Growing Platform</h1>
      </div>

      <div style={Style.whiteBox}>
        <div style={Style.blackBox1}>
          <p>
            Privacy like eating and breathing is one of lifes basic requirements
          </p>
        </div>
        <div style={Style.blackBox2}>
          <p>
            Security used to be an inconvenience sometimes, but now its
            anecessity all the time
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
