import React from "react";
import companiesImg from "../Assets/companies.svg";

const Style = {
  Container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#FFFFFF",
    color: "black",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    // paddingLeft: "5%",

    padding: "0 5%",
    marginTop: "5%",
  },
  h1: {
    fontSize: "60px",
    fontWeight: "normal",
  },
};

function Section3() {
  return (
    <div style={Style.Container}>
      <h1 style={Style.h1}>We Helped More Than 1000 Companies</h1>
      <img src={companiesImg} alt={"Companies Img"} />
    </div>
  );
}

export default Section3;
