import { Outlet } from "react-router-dom";
import '../commonPages/homePage.css'
import Navbar from "../../components/navBar";

const Homepage = () =>{
    return (
        <div className="homepage-container">
            <div className="navbar-container">
                <Navbar/>
                {/* <hr className="navbar-seperator"/> */}
            </div>
            <div className="body-container">
                <Outlet/>
            </div>
        </div>
    )
}

export default Homepage;


