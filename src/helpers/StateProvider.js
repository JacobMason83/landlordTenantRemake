import { createContext, useContext, useReducer } from "react";
// setting up data layer
// need this to track the basket or other data needed for the app itself
// this is the data layer 
export const StateContext = createContext()

// build a provider 
export const StateProvider = ({reducer, initalState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside of a component 
export const useStateValue = () => useContext(StateContext)