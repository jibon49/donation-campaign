
import PropTypes from 'prop-types';

const Banner = ({ formSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const value = e.target.search.value;
        formSubmit(value);
    }

    return (
        <div className="hero md:min-h-[650px]" style={{ backgroundImage: 'url(/donation.jpg)' }}>
            <div className=" hero-overlay bg-[#FFFFFFF2] bg-opacity-100"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-[#0B0B0B] text-2xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="search" placeholder="Search here.." className="md:border-r-0 md:rounded-r-none input text-black input-bordered w-full max-w-md" />
                        <button type="submit" className="btn bg-[#FF444A] text-white md:border-l-0 md:rounded-l-none">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    formSubmit: PropTypes.func
};
export default Banner;
