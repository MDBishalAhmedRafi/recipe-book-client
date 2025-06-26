import { createContext, useContext } from "react";

// "cards" is the default
export const ViewModeContext = createContext("cards");

export const useViewMode = () => useContext(ViewModeContext);