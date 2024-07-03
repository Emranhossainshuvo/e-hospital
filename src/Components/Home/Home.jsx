import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <>
            <div className="custom-gradient">
                <Navbar />
                <Banner />
            </div>
        </>
    );
};

export default Home;