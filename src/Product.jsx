import ProductCard from "./components/ProductCard"
import { data } from "./Db/ProductDb"



const Products = () => {
    return (
      <div>
        <h1>Product Page</h1>
        <div className="d-flex justify-content-between flex-wrap gap-3">
          {data.map((product) => {
            return (
              <div className="" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Products;