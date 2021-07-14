import React from "react";

const ZLayout = () => {
  const styles = {
    minHeight: "80vh",
    // backgroundColor: "purple",
    // position: "relative",
    display: "flex",
    flexWrap: "wrap",
  };
  const headerStyles = {
    display: "flex",
    // backgroundColor: "red",
    width: "100%",
    height: "20vh",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyles = {
    backgroundImage:
      'url("https://www.creativefabrica.com/wp-content/uploads/2018/10/Letter-Z-Logo-by-yahyaanasatokillah-580x387.jpg")',
    backgroundSize: "contain",
    height: "100px",
    width: "200px",
    backgroundRepeat: "no-repeat",
  };

  const navStyles = {
    display: "inline-flex",
    width: "400px",
    color: "#000039",
    fontSize: "20px",
    justifyContent: "space-between",
    width: "400px",
    fontFamily: "Arial, Helvetica, sans-serif",

    // paddingLeft: "22px",
    listStyle: "none",
  };

  const middleStyles = {
    backgroundImage: 'url("https://picsum.photos/2000")',
    border: "5px solid #000039",
    width: "200%",
    height: "200px",
    backgroundColor: "black",
    // overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const endStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  };

  const boxStyles = {
    width: "300px",
    height: "100px",
    // backgroundColor: "pink",
    padding: "5px 10px 15px 20px",
    display: "flex",
    alignItems: "center",
    // outlineStyle: "solid",
    // outlineColor: "#000039",
    fontFamily: "Arial, Helvetica, sans-serif",

    // justifyContent: "space-around",
  };
  const buttonStyles = {
    // backgroundColor: "#000039",
    height: "115px",
    width: "325px",
    // borderRadius: "25px",
    color: "blue",
    fontFamily: "Arial, Helvetica, sans-serif",
    border: "20px solid #000039",
  };

  return (
    <div style={styles}>
      <div style={headerStyles}>
        <div style={logoStyles}></div>
        <ul style={navStyles}>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div style={middleStyles}></div>
      <div style={endStyles}>
        <div style={boxStyles}>
          A Z-Pattern design traces the route the human eye travels when they
          read — left to right, top to bottom
        </div>
        <div style={boxStyles}>
          Creating a web page with the Z-Layout helps to create a visual
          hierarchy that people are likely to follow
        </div>
        <div style={boxStyles}>
          <button style={buttonStyles}>CLICK HERE TO SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default ZLayout;
