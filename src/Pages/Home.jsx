import Carousel from "../Components/Carousel";
import About from "./About";
import Services from "./Services";

const Home = () => {
    return (
        <>
        <div className="container mx-auto">
            <Carousel></Carousel>
            
        </div>
            <About></About>
            <Services></Services>
        </>
        
    );
};

export default Home;