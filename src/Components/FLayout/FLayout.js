import React from "react";
import GoogleButton from "react-google-button";
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
    backgroundImage: 'url("https://i.redd.it/b87c10q2n1c01.jpg")',
    backgroundSize: "contain",
    backgroundPosition: "leftTop",
    backgroundRepeat: "no-repeat",
  };
  const aStyles = {
    display: "flex",
    alignContent: "space-evenly",
  };

  const h3 = {
    textDecoration: "underline",
  };

  const bStyles = {
      borderRadius: "12px",
      
  };



  return (
    <div style={styles}>
      <div style={styles.google}>
        <div style={imgStyles}></div>
        <input></input>
        <button style={bStyles}>Search</button>
        <button style={bStyles}>Sign In</button>
        <GoogleButton
         onClick={() => { console.log('Google button clicked') }}/>
      </div>
      <hr style={styles.hrStyles}></hr>
      <div style={styles.leftStyles}>
        <input style={styles.inputStyles}></input>
        <a style={aStyles} href="https://www.google.com">Web</a>
        <a style={aStyles} href="https://www.google.com/imghp?hl=en">Images</a>
        <a style={aStyles} href="https://maps.google.com">Maps</a>
        <a style={aStyles} href="https://www.google.com/videohp?hl=en">Videos</a>
        <a style={aStyles} href="https://news.google.com/foryou?hl=en-US&gl=US&ceid=US:en">
          News
        </a>
        <a style={aStyles} href="https://shopping.google.com/?utm_source=digital_paid&utm_medium=google_search&utm_campaign=bkws-gse-acq&gclsrc=aw.ds&gclid=CjwKCAjw55-HBhAHEiwARMCszs-fRqsqBuKg0qsNsa8ovEB3EFPKdeRMlt_tXGZqwg0MpzoRa94hnRoCGAQQAvD_BwE">
          Shopping
        </a>
        <a style={aStyles} href="https://www.google.com/morehp?hl=en">More</a>
      </div>
         <h3> </h3>


      </div>
    
  );
};


export default FLayout;
