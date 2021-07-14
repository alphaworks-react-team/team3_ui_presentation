import { GifRounded, Repeat } from "@material-ui/icons";
import React from "react";

const FlatGrid = () => {
  const gridStyles = {
    display: "grid",
    gridTemplatesColumns: 'repeat(3,1fr)',
  }
  return (
    <div style={gridStyles}>
    </div>
  );
}

export default FlatGrid

