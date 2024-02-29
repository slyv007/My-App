import img1 from "../assets/Images/img2.jpg"
import Hero from "../components/Hero"
import Menu from "../components/Nav"
import "../Css/Home.css"
import ProductCard from "../components/ProductCard"
function Home () {
    return (
        <>
        {/* <Menu/> */}
        <Hero heading="Welcome to Home page" image={img1}/>
        <ProductCard/>
        {/* <h1 className="bg-danger text-light">Welcome to Home Page</h1> */}
        <div className="" style={{backgroundColor: "purple", height: "400px", borderRadius: "15px"}}>
            <img src={img1} alt="getready" />
            </div>
            </>
    )
}

export default Home