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
    color: "blue",
    fontSize: "20px",
    justifyContent: "space-between",
    width: "400px",

    // paddingLeft: "22px",
    listStyle: "none",
  };

  const middleStyles = {};

  const endStyles = {};

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
        <box></box>
        <box></box>
        <box></box>
      </div>
    </div>
  );
};

export default ZLayout;
