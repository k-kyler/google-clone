import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layer
export const StateContext = createContext();

// Higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* the children is the <App /> in index.js */}
        {children}
    </StateContext.Provider>
);

// This is the hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
