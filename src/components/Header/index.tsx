import React from "react";
import {useAppState} from "../../AppContext";
import {useHistory} from "react-router-dom";

const Header: React.FC = () => {
    const {state, dispatch} = useAppState();
    const history = useHistory();

    // const token: boolean = false;
    const token = state.token;

    const logoutHandler = () => {
        dispatch({type: 'LOGOUT'})
        history.push('/')
    }


    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">ITServices</a>
                {
                    token !== null
                    ? <button type="button" className="btn btn-danger" onClick={logoutHandler}>Logout</button>
                    : <button type="button" className="btn btn-warning" onClick={() => history.push('/login')}>Login</button>
                } 
            </div>
            
            
            
        </nav>
    )
};
export default Header;