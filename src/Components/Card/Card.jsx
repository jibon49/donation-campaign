import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const Card = ({data}) => {

    const {id,picture,card_bg,category_bg,category,title,text_color} = data;

    return (
        <div>
            <Link to={`/details/${id}`} className="card card-compact shadow-xl" style={{backgroundColor:card_bg}}>
                <figure><img className="bg-cover w-full md:h-48 lg:h-52" src={picture} /></figure>
                <div className="card-body">
                    <button className="text-sm font-medium px-2 py-1 rounded-md w-1/3" style={{backgroundColor:category_bg,color:text_color}}>{category}</button>
                    <p className="text-xl font-semibold" style={{color:text_color}}>{title}</p>
                    
                </div>
            </Link>
        </div>
    );
    
};

Card.propTypes = {
    data: PropTypes.object
  };

export default Card;