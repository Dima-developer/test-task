import React from "react";
import {Redirect} from "react-router-dom";
import {useAppState} from "../AppContext";
import { useHistory } from "react-router-dom";

const PrivatePage: React.FC = () => {
    const {state} = useAppState();
    const history = useHistory();

    const token = state.token;
    if(token == null) return <Redirect to="/login" />

    return(
        <div className="container">
            <h1>Hi Marcus!!!</h1>
            <div>
                <button type="button" className="btn btn-primary" onClick={() => history.push('/')}>Back to Home page</button>
            </div>
        </div>
    )
};
export default PrivatePage;