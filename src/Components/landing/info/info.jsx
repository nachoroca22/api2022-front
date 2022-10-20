import { Grid } from "@mui/material";
import React from "react";
import "./info.css";

const Info = () => {
  return (

    <Grid container justifyContent="center"  className="info-container">
      <Grid item xs={12} sm={12} md={12} lg={12} className="info">
      <p>"La mente es como un paracaídas: sólo funciona si se abre"</p>
      <h3> Albert Einstein </h3>
      </Grid>
    </Grid>
  );
};

export default Info;

