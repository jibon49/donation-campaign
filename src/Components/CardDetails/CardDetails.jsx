import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id);
    const card = cards.find(card => card.id === intId);

    const { picture, title, text_color, price, description } = card;

    const handleDonate = () => {

        const donatedTo = [];

        const donation = JSON.parse(localStorage.getItem('donation'))

        if(!donation){
            donatedTo.push(card)
            localStorage.setItem('donation',JSON.stringify(donatedTo))
            toast('Donated successfully');
        }
        else{

            const isExist = donation.find(card=> card.id === intId)

            if(!isExist){
            donatedTo.push(...donation,card)
            localStorage.setItem('donation',JSON.stringify(donatedTo))
            toast('Donated successfully');
            }
            else{
                toast.error('Cant donate in same category twice');
            }
            
        }

    }

    return (
        <div className="lg:mt-14 lg:ml-36 md:max-w-7xl mb-5 p-4">
            <div className="hero hero-overlay h-96 lg:h-[700px] items-end justify-start rounded-xl" style={{ backgroundImage: `url(${picture})` }}>
                <div className="">
                    <button  onClick={handleDonate} className="btn ml-9 mb-9" style={{ backgroundColor: text_color, color: "white", border: 0 }}>Donate ${price}</button>
                </div>

            </div>
            <h1 className="text-4xl font-bold mt-14 mb-6">{title}</h1>
            <p>{description}</p>
            <ToastContainer></ToastContainer>
        </div>


    );
};

export default CardDetails;