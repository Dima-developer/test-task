import React from "react";
import {NavLink} from "react-router-dom";

const HomePage: React.FC = () => {
    return(
        <div className="container">
            <h1>Home Page</h1>
            <div>
                <NavLink to="/private">To the private page</NavLink>
            </div>            
        </div>
    )
};
export default HomePage;