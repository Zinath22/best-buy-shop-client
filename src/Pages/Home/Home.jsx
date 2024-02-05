import BoysCollection from "../../Components/BoysCollection/BoysCollection";
import GirlsCollection from "../../Components/GirlsCollection/GirlsCollection";
import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GirlsCollection></GirlsCollection>
            <Discount></Discount>
            <BoysCollection></BoysCollection>

        </div>
    );
};

export default Home;