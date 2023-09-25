import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = ({allData}) => {


    return (
        <div  className="my-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-36 items-center max-w-7xl">
                
                    {
                        allData?.map((data,idx) => <Card key={idx} data={data}></Card>)
                    }
                
            </div>
    );
};

Cards.propTypes = {
    allData: PropTypes.array
  };

export default Cards;