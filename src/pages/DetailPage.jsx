import React from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { data } from '../Db/ProductDb'
import Detailcard from '../components/Detailcard'

const DetailPage = () => {
    const { id } = useParams()
    // console.log(`Product ${id} clicked`);
    // console.log(data);

    // Go into the database and find the product with the id===productId
const product = data.find((p)=> p.id===parseInt (id));
console.log(product);
  return (
    <div>
      <h1>Detail Page</h1>
      
      <div className="">
        <h1>product {id} clicked</h1>
        {/* <ProductCard product={product}/> */}
        <Detailcard product={product}/>
      </div>
    </div>
  )
}

export default DetailPage
