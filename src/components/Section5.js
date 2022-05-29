import React from "react";

const Style = {
  Container: {
    height: "135vh",
    width: "100%",
    backgroundColor: "#000000",
    color: "white",
    padding: "0 5%",
  },
  h1: {
    fontSize: "60px",
    textTransform: "uppercase",
  },
  cardContainer: {
    // backgroundColor: "pink",
    height: "90vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  card1: {
    backgroundColor: "white",
    color: "black",
    padding: "30px",
    borderRadius: "20px",
    width: "30%",
    height: "75vh",
    // position: "relative",
  },
  title: {
    paddingBottom: "25px",
    borderBottom: "solid 1px grey",
  },

  info: {
    // backgroundColor: "orange",
    paddingTop: "40px",
    height: "52vh",
  },

  h4: {
    fontSize: "30px",
    margin: "0",
  },

  p: {
    fontSize: "20px",
    margin: "15px",
  },
  blueBtn: {
    backgroundColor: "#1C55C9",
    border: "none",
    color: "white",
    padding: "10px 30px",
    borderRadius: "40px",
    fontFamily: "Chakra Petch",
    fontSize: "20px",
    width: "100%",
  },
};

function Section5() {
  return (
    <div style={Style.Container}>
      <div style={{ textAlign: "center", paddingTop: "10vh" }}>
        <h1 style={Style.h1}>Get your best deal</h1>
      </div>

      <div style={Style.cardContainer}>
        <div style={Style.card1}>
          <div style={Style.title}>
            <h4 style={Style.h4}>Personal</h4>
            <p style={{ fontSize: "20px", margin: "0" }}>
              Special first packet for all
            </p>
          </div>

          <div style={Style.info}>
            <h3 style={{ fontSize: "60px", margin: "0" }}>$8</h3>
            <p style={Style.p}>Up to 5 page each group</p>
            <p style={Style.p}>Up to 10 group page</p>
            <p style={Style.p}>5 Days group page saved</p>
          </div>

          <button style={Style.blueBtn}>Start Free Trail</button>
        </div>

        <div style={Style.card1}>
          <div style={Style.title}>
            <h4 style={Style.h4}>Regular</h4>
            <p style={{ fontSize: "20px", margin: "0" }}>
              Recommended for personal pro
            </p>
          </div>
          <div style={Style.info}>
            <h3 style={{ fontSize: "60px", margin: "0" }}>$20</h3>
            <p style={Style.p}>Up to 15 page each group</p>
            <p style={Style.p}>Download page up to 20 page</p>
            <p style={Style.p}>Up to 10 group page</p>
            <p style={Style.p}>15 Days group page saved</p>
          </div>

          <button style={Style.blueBtn}>Start Free Trail</button>
        </div>

        <div style={Style.card1}>
          <div style={Style.title}>
            <h4 style={Style.h4}>Premium</h4>
            <p style={{ fontSize: "20px", margin: "0" }}>
              Packet for Startup & Company
            </p>
          </div>
          <div style={Style.info}>
            <h3 style={{ fontSize: "60px", margin: "0" }}>$48</h3>
            <p style={Style.p}>Unlimited group pages</p>
            <p style={Style.p}>Unlimited download page</p>
            <p style={Style.p}>Unlimited page each group</p>
            <p style={Style.p}>Customize sorting group pages</p>
            <p style={Style.p}>Customize group page name</p>
            <p style={Style.p}>30 Days group page saved</p>
          </div>

          <button style={Style.blueBtn}>Start Free Trail</button>
        </div>
      </div>
    </div>
  );
}

export default Section5;
