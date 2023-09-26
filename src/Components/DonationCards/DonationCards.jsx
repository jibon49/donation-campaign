import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCards = ({ card }) => {

    const { id, title, picture, category_bg, text_color, category, card_bg, price } = card

    return (
        <div className="card card-side bg-base-100 shadow-xl" style={{backgroundColor:card_bg}}>
            <figure className=" w-56"><img className="h-52" src={picture} /></figure>
            <div className="card-body">
                <h3 className="text-sm text-center font-medium px-2 py-1 rounded-md w-1/3" style={{ backgroundColor: category_bg, color: text_color }}>{category}</h3>
                <p className="text-xl font-semibold" style={{ color: text_color }}>{title}</p>
                <p className="font-semibold" style={{color:text_color}}>${price}</p>
                <Link to={`/details/${id}`}><button className="px-4 py-2 w-1/2 rounded-lg" style={{ backgroundColor: text_color, color: "white", border: 0}}>View Details</button></Link>

            </div>
        </div>
        
    );
};
DonationCards.propTypes = {
    card: PropTypes.object
  };

export default DonationCards;