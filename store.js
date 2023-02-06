import { createContext, useContext, useState } from "react";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
    const [state, setState] = useState({
        isIndia: true,
    })
    return (
        <Store.Provider value={{ state, setState }}>
            {children}
        </Store.Provider>
    )
}
