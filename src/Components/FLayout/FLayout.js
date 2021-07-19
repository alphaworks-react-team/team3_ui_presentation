import React from "react";
import GoogleButton from "react-google-button";
import googleIcon from "./Images/Google_icon.png";
const FLayout = () => {
  const styles = {
    paddingTop: "20px",
    minHeight: "80vh",
    google: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    inputStyles: {
      display: "flex",
      flexDirection: "column",
      width: "80vh",
      height: "40px",
    },
  };
  const imgStyles = {
    height: "10vh",
    width: "100px",
    position: "relative",
    left: "0px",
    right: "20px",
    top: "40px",
    backgroundImage: `url(${googleIcon})`,
    backgroundSize: "110px",
    backgroundPosition: "leftTop",
    backgroundRepeat: "no-repeat",
    paddingTop: "40px",
  };
  const inputStyles = {
    borderRadius: "25px",
    boxShadow: "5px 2px #D3D3D3",
    height: "30px",
    width: "50%",
  };
  const aStyles = {
    display: "flex",
    alignContent: "space-evenly",
    paddingTop: "20px",
  };

  const h3 = {
    textDecoration: "underline",
  };

  const bStyles = {
    borderRadius: "25px",
    width: "100px",
    height: "45px",
  };
  const articleStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const cardStyles = {
    width: "80vw",
    // backgroundColor: "gray",
    paddingLeft: "70px",
  };
  const h5Styles = {
    // fontStyle: "italic",
  };
  const contentStyles = {
    display: "flex",
  };
  const h1Styles = {
    color: "blue",
  };
  const pStyles = {
    paddingBottom: "60px",
    color: "#696969",
  };
  return (
    <div style={styles}>
      <div style={styles.google}>
        <div style={imgStyles}></div>
        <input style={inputStyles}></input>

        <button style={bStyles}>Search</button>
        <button style={bStyles}>Sign In</button>
        <GoogleButton
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
      </div>
      <hr style={styles.hrStyles}></hr>
      <div>
        <h3>About 100,003 Search Results (0.55 seconds)</h3>
      </div>
      {/* <input style={styles.inputStyles}></input> */}

      <div style={contentStyles}>
        <div style={styles.leftStyles}>
          <a style={aStyles} href="https://www.google.com">
            Web
          </a>
          <a style={aStyles} href="https://www.google.com/imghp?hl=en">
            Images
          </a>
          <a style={aStyles} href="https://maps.google.com">
            Maps
          </a>
          <a style={aStyles} href="https://www.google.com/videohp?hl=en">
            Videos
          </a>
          <a
            style={aStyles}
            href="https://news.google.com/foryou?hl=en-US&gl=US&ceid=US:en"
          >
            News
          </a>
          <a
            style={aStyles}
            href="https://shopping.google.com/?utm_source=digital_paid&utm_medium=google_search&utm_campaign=bkws-gse-acq&gclsrc=aw.ds&gclid=CjwKCAjw55-HBhAHEiwARMCszs-fRqsqBuKg0qsNsa8ovEB3EFPKdeRMlt_tXGZqwg0MpzoRa94hnRoCGAQQAvD_BwE"
          >
            Shopping
          </a>
          <a style={aStyles} href="https://www.google.com/morehp?hl=en">
            More
          </a>
        </div>
        <h3> </h3>
        <div style={articleStyles}>
          {[...new Array(10)].map((article, index) => (
            <div style={cardStyles}>
              <h5 style={h5Styles}>
                https://www.F-Layout.com > This a F-Layout
              </h5>
              <h1 style={h1Styles}>I am a Search Result {index + 1}</h1>
              <p style={pStyles}>
                Mar 7, 2012 — Today we're going to examine the "F Pattern
                Layout". Rather than ... Then they scan the top of the site
                (navigation, subscription, search, etc.) ...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FLayout;
