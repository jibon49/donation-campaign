
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useState } from "react";

const Home = () => {
    const allData = useLoaderData();
    const [searchValue, setSearchValue] = useState("");

    const formSubmit = (value) => {
        setSearchValue(value);
    }

    return (
        <div>
            <Banner formSubmit={formSubmit} />
            <Cards allData={allData} searchValue={searchValue} />
        </div>
    );
};

export default Home;
