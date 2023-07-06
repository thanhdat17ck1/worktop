// import React, { createContext, useState } from 'react'

// const ThemeContext = createContext();
// function Context ({children}) {
//     const [theme, setTheme] = useState('dark')
//     const toggleTheme= () => {
//         setTheme(theme === 'dark' ? 'light' : 'dark')
//     }
//     const value = {
//         theme,
//         toggleTheme
//     }
//   return (
//     <ThemeContext.Provider value={value}>
//         {children}
//     </ThemeContext.Provider>
//   )
// }

// export 

import { createContext } from "react"

const ThemeContext = createContext()

const Context = ({children}) => {
    const contextValue = 'Hello world 1' 
  return (
    <div>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export {Context, ThemeContext}

