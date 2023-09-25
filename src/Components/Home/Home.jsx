import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";


const Home = () => {

    const allData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Cards allData={allData}></Cards>
        </div>
    );
};

export default Home;