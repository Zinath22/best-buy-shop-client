import GirlsCollection from "../../Components/GirlsCollection/GirlsCollection";
import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GirlsCollection></GirlsCollection>
            <Discount></Discount>

        </div>
    );
};

export default Home;