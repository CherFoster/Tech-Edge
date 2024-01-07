import React from "react";

function Home(){
   
    function scrollDown(){
        document.getElementById('services').scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="home-page hero">
          <div class="background-container">
            <img src="https://i.postimg.cc/TwCGSW3c/Untitled-design-removebg-preview-removebg-preview.png" alt="Background" />
            <h1 className="overlay-text">Tech Edge Development</h1>
            </div>
          <h1 className="home-h1">Where Code Creates Impact</h1>
          <p className="home-p">At Tech Edge, innovation meets reliability in the realm of developing. I am a passionate software engineer, dedicated to transforming your digital dreams into reality.</p>
          <p className="home-p2">Check out our services</p>
          <div class="container">
                <a data-scroll href="#services">
                 <div class="arrow"></div>
                </a>
            </div>
            <div id="full"></div>
        </div>
      );
    }

export default Home;