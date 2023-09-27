import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img className="h-[90vh] mx-auto" src="./../../../public/Resources/notfound.jpg" alt="" />
            <NavLink to="/"><button className="btn bg-[#FF444A] text-white justify-center flex mx-auto">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;