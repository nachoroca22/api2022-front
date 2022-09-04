import * as React from 'react';
import Cover from "../Components/landing/Cover/cover"
import Navbar from "../Components/landing/navBar/navBar"
import { useState, useEffect } from 'react';
import Aboutdesc from "../Components/landing/about/about"
import Slider from "../Components/landing/slider/slider"
import Footer from "../Components/landing/footer/footer"
import Info from "../Components/landing/info/info"

function Home() {
  const [scrollHeight,setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
  }, [scrollHeight])
  
  return (
    <React.Fragment >
      <Navbar isScrolling={scrollHeight}></Navbar>
      <Cover></Cover>  
      <Slider></Slider>
      <Aboutdesc></Aboutdesc>
      <Info></Info>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
