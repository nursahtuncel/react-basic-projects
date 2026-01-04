import {  createContext, useContext } from "react";

export const BasketContext = createContext()

export const BasketProvider = ({children})=>{
    return(
          <BasketContext.Provider value={{}}>
    {children}

  </BasketContext.Provider>
    )

}