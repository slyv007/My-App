import React from "react";
import Menu from "../components/Nav";

import "../Css/About.css"
import Hero from "../components/Hero";
import img1 from "../assets/Images/get1free.jpg"

const About = () => {

    // JSX
  const myJsx = <h3>This is awesome JSX</h3>

  // myFavFood
  const food = ["amala", "tuwo", "jollof", "spaghetti"]
  const myStyle= {listStyle: "none", color: "red", backgroundColor: "#eee", width: "50%", marginInline: "auto"}
  
  return (
    <div>
      {/* <Menu/> */}
      
      <Hero heading="Welcome to About page" image={img1}/>
      <div>
        <h1>Daniel's React App 1.0</h1>
        {myJsx}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis soluta
        dicta, doloremque officia nisi dolorum sed placeat nihil aliquid optio.
      </p>

      {/* map through food array */}
      <h3>My favourite food</h3>
      {food.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>
            <p>My favourite food is {f}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;