import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Detailcard = ({product}) => {
  return (
    <div className= "row" style={{height: "20rem"}}>
      <div className="col-12 col-md-6" style={{height : "20rem"}}>
        <img src={product.image} alt="" width="50%"/>
      </div>
      <div className="col-12">
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <p>{product.price}</p>
        <Button>
        <NavLink to="/product" style={{textDecoration: "none", color: "white"}}>
           Go Back
        </NavLink>
        </Button>   
      </div>

      
    </div>
  )
}

export default Detailcard
