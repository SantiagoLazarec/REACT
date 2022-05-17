import React from 'react'
import React, { createContext, useState} from 'react'

export const GlobalContext = createContext("")
const GlobalStateContext = ({children}) => {
  const [productos, setProductos] = useState([])
    return (
    <GlobalContext.Provider value={{productos, setProductos }}>
    {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext