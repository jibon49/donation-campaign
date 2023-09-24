

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[650px]" style={{ backgroundImage: 'url(public/Resources/donation.jpg)' }}>
                <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-[#0B0B0B] text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div>
                            <input type="text" placeholder="Type here" className="border-r-0 rounded-r-none input input-bordered w-full max-w-md" />
                            <button className="btn bg-[#FF444A] text-white border-l-0 rounded-l-none">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;