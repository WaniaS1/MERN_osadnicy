import { createContext, useReducer } from "react";
import React from 'react'

export const DataContext = createContext()

export const dataContextReducer = (state, action) => {
    
}

export default function DataContextProvider({children}) {
    const [state, dispatch ] = useReducer(dataContextReducer, {data: [{name: 'dummy'}, {name: 'rummy'}]})

    return (
        <DataContext.Provider value = {{...state, dispatch }}>
            {children}
        </DataContext.Provider>
    )

}