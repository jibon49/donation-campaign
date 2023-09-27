import { useState, useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({ allData, searchValue }) => {
    const [showCard, setShowCard] = useState(allData);


    useEffect(() => {
        if (searchValue) {
            const searchedData = allData.filter(data => data.category.toLowerCase() === searchValue.toLowerCase());
            setShowCard(searchedData);
        } else {
            setShowCard(allData);
        }
    }, [searchValue, allData]);

    return (
        <div className="my-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-36 items-center max-w-7xl">
            {showCard.length > 0 ? (
                showCard.map((data, idx) => <Card key={idx} data={data}></Card>)
            ) : (
                <p>No data found</p>
            )}
        </div>
    );
};

Cards.propTypes = {
    allData: PropTypes.array,
    searchValue: PropTypes.string
};

export default Cards;
