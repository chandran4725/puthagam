import React, { createContext,useState } from 'react'


export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {

    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (

        <ToggleContext.Provider value={{toggle,toggleMenu}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleProvider