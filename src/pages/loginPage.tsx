import React, {useState} from "react";
import {useAppState} from "../AppContext";
import { useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
    const history = useHistory();
    const {dispatch} = useAppState();

    const [emailWr, setEmailWr] = useState('');
    const [passwordWr, setPasswordWr] = useState('');
    

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmailWr(event.target.value)
    };
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setPasswordWr(event.target.value)
    };
    
    const loginHandler = (props:React.MouseEvent<HTMLButtonElement> ) => {
        const dataLogin = {
            email: emailWr,
            password: passwordWr
        };
        dispatch({ type: 'LOGIN', payload: dataLogin });
        history.push('/');
    }

    return(
        <div className="container">
            <h1>Login</h1>
            <div className="col-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="formGroupExampleInput" 
                    placeholder="Add Email" 
                    value={emailWr}
                    onChange={emailHandler} 
                />
            </div>
            <div className="col-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="formGroupExampleInput2" 
                    placeholder="Add Password" 
                    value={passwordWr}
                    onChange={passwordHandler}  
                />
            </div>
            <div className="col-12">
                {
                    emailWr !== '' && passwordWr !== ''
                    ?<button 
                            className="btn btn-primary" 
                            type="submit"
                            onClick={loginHandler}
                     >
                            Login
                     </button>
                     : <button disabled type="button" className="btn btn-secondary">Login</button>
                }
            </div>
        </div>
    )
};

export default LoginPage;