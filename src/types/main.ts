import {ReactElement} from "react";

export type MainProps = {
    sideBar: boolean | undefined
    sideBarWidth?: number | boolean | undefined
}

export interface MainProviderOpts {
    children: ReactElement
}

export type MainContextType = {
    data: MainProps
    setData: (data: MainProps) => void
}
