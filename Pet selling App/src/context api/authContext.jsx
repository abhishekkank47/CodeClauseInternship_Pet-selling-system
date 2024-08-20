import {useState, useContext, createContext, useEffect } from "react"

const authContext = createContext()

const Authprovider = ({children}) =>{

    const [auth, setAuth] = useState(
        {
            user : null,
            email : "",
            phone : "",
            address : "",
            token : "",
            refreshToken : ""
        }
        //WHATEVER WE WRITE HERE IS CAN BE ACCESEBLE EVERY COMPONENT, WHEN  WE USE OUR CUSTOM HOOK AND IMPORTING IN Main.jsx FILE
    )
 useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      try {
        const parseData = JSON.parse(storedAuth);
        setAuth({
          ...auth,
          user: parseData.user || null,
          email : parseData.email || "",
          phone : parseData.phone || "",
          address : parseData.address || "",
          token: parseData.token || "",
          refreshToken: parseData.refreshToken || ""
        });
      } catch (error) {
        console.error("Failed to parse auth data from localStorage:", error);
        // Optionally clear invalid data from localStorage
        localStorage.removeItem("auth");
      }
    }
  }, []); 
    return (
        <authContext.Provider value={[auth,setAuth]}>
            {children}
        </authContext.Provider>
    )
}

const useAuth = ()=> useContext(authContext)

export {useAuth, Authprovider}