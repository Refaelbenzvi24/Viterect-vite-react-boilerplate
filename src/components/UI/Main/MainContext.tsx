import {createContext} from "react";
import {MainContextType, MainProps} from "../../../types/main";

export const defaultMainData = {
    sideBar: true,
    sideBarWidth: 260
}

export const getInitialMain = (): MainProps => {
    // document.getElementById()

    return defaultMainData
}

export const MainContext = createContext<MainContextType>({} as MainContextType)
