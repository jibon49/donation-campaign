import DonationCards from "../DonationCards/DonationCards";



const Donation = () => {

    

    const donation = JSON.parse(localStorage.getItem('donation'))


    console.log(donation)

    return (
        <div className="grid grid-cols-2 gap-6 lg:ml-36 items-center max-w-7xl">
            {
                donation.map(card=> <DonationCards key={card.id} card={card}></DonationCards>)
            }
        </div>
    );
};

export default Donation;