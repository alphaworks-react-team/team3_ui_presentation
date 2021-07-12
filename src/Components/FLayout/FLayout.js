import React from "react";
const FLayout = () => {
  const styles = {
    paddingTop: "20px",
    minHeight: "80vh",
    google: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };

  const hrStyles = {};

  const inputStyles = {
    width: "60vh",
    height: "20px",
  };
  const imgStyles = {
    height: "10vh",
    width: "100px",
    backgroundImage: 'url("https://i.redd.it/b87c10q2n1c01.jpg")',
    backgroundSize: "contain",
    backgroundPosition: "leftTop",
    backgroundRepeat: "no-repeat",
  };

  const bStyles = {};

  return (
    <div style={styles}>
      <div style={styles.google}>
        <div style={imgStyles}></div>
        <input></input>
        <button style={bStyles}>Search</button>
        <button>Sign In</button>
      </div>
      <hr style={styles.hrStyles}></hr>
      <div style={styles.leftStyles}>
        <input style={styles.inputStyles}></input>
        <a href="https://www.google.com">Web</a>
        <a href="https://www.google.com/imghp?hl=en">Images</a>
        <a href="https://maps.google.com">Maps</a>
        <a href="https://www.google.com/videohp?hl=en">Videos</a>
        <a href="https://news.google.com/foryou?hl=en-US&gl=US&ceid=US:en">
          News
        </a>
        <a href="https://shopping.google.com/?utm_source=digital_paid&utm_medium=google_search&utm_campaign=bkws-gse-acq&gclsrc=aw.ds&gclid=CjwKCAjw55-HBhAHEiwARMCszs-fRqsqBuKg0qsNsa8ovEB3EFPKdeRMlt_tXGZqwg0MpzoRa94hnRoCGAQQAvD_BwE">
          Shopping
        </a>
        <a href="https://www.google.com/morehp?hl=en">More</a>
      </div>
     
    </div>
  );
};

export default FLayout;
