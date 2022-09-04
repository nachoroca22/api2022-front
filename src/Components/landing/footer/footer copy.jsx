import { Grid } from "@mui/material";
import React from "react";
import "./footer.css"


function footer() {
    return (
        <Grid container className="footer"> 
            <div className="footer-info">
                <h1> tuprofe.com</h1>
            </div>
        
        </Grid>

    )
}

export default footer;

<footer className="footer">
<div className="footer-info">
    <h1> tuprofe.com</h1>
</div>
<div className="footer-contact">
    <h3>Seguínos</h3>
</div>
<div className="footer-sns">
<div className="sns-links" >
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin linkedin"> tuprofe</i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter twitter"> @ tuprofeOK</i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram instagram"> @tuprofeOK</i>
    </a>
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook facebook"> tuprofe</i>
    </a>
</div>
</div>
</footer>