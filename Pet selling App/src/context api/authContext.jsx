import {useState, useContext, createContext } from "react"

const authContext = createContext()

const Authprovider = ({children}) =>{

    const [auth, setAuth] = useState(
        {
            user : null,
            token : ""
        }
        //WHATEVER WE WRITE HERE IS CAN BE ACCESEBLE EVERY COMPONENT, WHEN  WE USE OUR CUSTOM HOOK AND IMPORTING IN Main.jsx FILE
    )
    return (
        <authContext.Provider value={[auth,setAuth]}>
            {children}
        </authContext.Provider>
    )
}

const useAuth = ()=> useContext(authContext)

export {useAuth, Authprovider}