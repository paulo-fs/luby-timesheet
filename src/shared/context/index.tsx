import { createContext, useState } from 'react'

interface ProviderPropTypes {
   children: React.ReactNode
}

interface ContextType {
   isSigned: boolean
   setIsSigned: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext({} as ContextType)

export function ContextProvider({ children } : ProviderPropTypes){
   const [isSigned, setIsSigned] = useState(false);

   return(
      <Context.Provider value={{
         isSigned, setIsSigned
      }}>
         {children}
      </Context.Provider>
   )
}
