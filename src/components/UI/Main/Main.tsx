import {ReactElementProps} from "../../../types";
import i18n from "../../../plugins/i18n";
import {useContext} from "react";
import {MainContext} from "./MainContext";
import {defaultMainData} from "./MainContext";

const {sideBarWidth: dSideBarWidth} = defaultMainData

export default (props: ReactElementProps) => {
    const {data, setData} = useContext(MainContext)
    const {children, className} = props
    const dir = i18n.dir()
    let classes: string

    const {sideBar, sideBarWidth} = data

    if (dir === 'ltr') {
        classes = sideBar ? `ml-[${sideBarWidth || dSideBarWidth}px]` : ''
    } else classes = sideBar ? `mr-[${sideBarWidth || dSideBarWidth}px]` : ''


    return (
        <div {...props} id="main" className={`${classes} ${className}`}>
            {children}
        </div>
    )
}
