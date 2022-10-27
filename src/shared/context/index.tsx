import { createContext, useState } from 'react'

interface ProviderPropTypes {
   children: React.ReactNode
}

interface ContextType {
   isSigned: boolean
   handleSignIn: () => void
}

export const Context = createContext({} as ContextType)

export function ContextProvider({ children } : ProviderPropTypes){
   const [isSigned, setIsSigned] = useState(true);

   function handleSignIn(){
      setIsSigned(true)
   }

   return(
      <Context.Provider value={{
         isSigned, handleSignIn
      }}>
         {children}
      </Context.Provider>
   )
}
