import React, {createContext, useReducer, useContext} from "react";

export type AppState = {
    email: string,
    password: string,
    token: string | null
};

type AppContextProps = {
    state: AppState,
    dispatch: React.Dispatch<Action>
};

const appData: AppState = {
    email: '',
    password: '',
    token: localStorage.getItem('token')
};

type Action = 
    | {
        type: 'LOGIN',
        payload: { email: string, password: string}
      }
    | {
        type: 'LOGOUT'
      };

const appStateReducer = (state: AppState, action: Action): AppState => {
    switch(action.type) {
        case "LOGIN": {
            const emailReceived = action.payload.email;
            const passwordReceived = action.payload.password;
            console.log('emailReceived: ', emailReceived); //

            if(emailReceived !== '' && passwordReceived !== '' ) {
                const generatedToken = "test123";
                localStorage.setItem('token', generatedToken);
            
            return {
                email: emailReceived,
                password: passwordReceived,
                token: generatedToken
            }
            } else {
                return state
            }
        }
        case "LOGOUT":{
            localStorage.removeItem('token');
            return{
                email: '',
                password: '',
                token: localStorage.getItem('token')
            }
        }
        default: {
            return state
        }
    }
}

const AppStateContext = createContext<AppContextProps>({} as AppContextProps);

export const AppStateProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(appStateReducer, appData)

    return(
        <AppStateContext.Provider value={{state, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
};

export const useAppState = () => {
    return useContext(AppStateContext)
};
