import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
const [user, setUser] = useState('');
const [users, setUsers] = useState([]);

    return(
        <GlobalContext.Provider value={{user, setUser, users, setUsers}}>
            {children}
        </GlobalContext.Provider>
    )
}
