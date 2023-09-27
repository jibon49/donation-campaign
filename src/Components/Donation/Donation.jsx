import { useState } from "react";
import DonationCards from "../DonationCards/DonationCards";


const Donation = () => {


    const donation = JSON.parse(localStorage.getItem('donation'))
    const [isSee, setIsSee] = useState(false)


    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6 lg:ml-36 items-center max-w-7xl">

                {
                    donation ?
                        (isSee ?
                            (donation.map(card => <DonationCards key={card.id} card={card}></DonationCards>))
                            :
                            (donation.slice(0,4).map(card => <DonationCards key={card.id} card={card}></DonationCards>)))
                        :
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mt-10">You Have not Donated Yet</h1>
                        </div>
                }

            </div>
            <div className="mx-auto items-center flex justify-center mt-10">
                {
                    !isSee &&
                    donation &&
                    donation.length > 4 && <button onClick={() => {
                        setIsSee(true)
                    }} className="btn btn-primary bg-[#009444] border-0 text-white">See all</button>

                }
            </div>
        </div>
    );
};

export default Donation;