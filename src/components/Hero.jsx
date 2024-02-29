import React from 'react'
import hero from "../assets/Images/get1free.jpg"

const Hero = (props) => {
    // destructuring the props
    const { heading="Welcome to My page", image } = props
  return (
    <div style={{backgroundColor: "red", color: "white"}}>
        <div className="">
            <img src={image} alt="" height="200px" />
        </div>
      <h1>{heading}</h1>
    </div>
  )
}

export default Hero
