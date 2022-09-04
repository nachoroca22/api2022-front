import React from "react";
import "./slider.css"
import crypto from "../../media/slide_crypto.jpg";
import finance from "../../media/slide_finance.jpg";
import frances from "../../media/slide_frances.jpg";
import fotografia from "../../media/slide_fotografia.jpg";
import piano from "../../media/slide_piano.jpg";
import pintura from "../../media/slide_pintura.jpg";
import programacion from "../../media/slide_programacion.jpg";
import python from "../../media/slide_python.jpg";
import yoga from "../../media/slide_yoga.jpg";


const slidesInfo =[
    {src: crypto,
    alt:"Crytomonedas",
    desc:"Crytomonedas"},

    {src:finance,
    alt:"Finanzas",
    desc:"Finanzas"},

    {src:fotografia,
    alt:"Fotografia",
    desc:"Fotografia"},

    {src:frances,
    alt:"Frances",
    desc:"Frances"},

    {src:piano,
    alt:"Piano",
    desc:"Piano"},

    {src:pintura,
    alt:"Pintura",
    desc:"Pintura"},

    {src:programacion,
    alt:"Programacion",
    desc:"Programacion"},

    {src:python,
    alt:"Python",
    desc:"Python"},

    {src:yoga,
    alt:"Yoga",
    desc:"Yoga"}
]

const slides = slidesInfo.map(slide =>(
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;