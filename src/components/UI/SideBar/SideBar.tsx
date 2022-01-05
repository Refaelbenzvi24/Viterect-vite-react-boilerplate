import {ReactElementProps} from "../../../types";
import i18n from "../../../plugins/i18n";
import WindowVars from "../../../mixins/WindowVars";
import Col from "../Grid/Col";
import IconButton from "../Buttons/IconButton";
import React, {ReactElement, useContext, useEffect, useState} from "react";
import {defaultMainData, MainContext} from "../Main/MainContext";

interface SideBarProps extends ReactElementProps {
    width?: number
}

const {sideBarWidth} = defaultMainData

export default (props: SideBarProps) => {
    const dir = i18n.dir()
    let {children, width, className} = props
    const [open, setOpen] = useState(true)
    const {data, setData} = useContext(MainContext)

    width = width || sideBarWidth

    useEffect(() => {
        const localData = {
            sideBar: open as boolean,
            sideBarWidth: width
        }

        setData(localData)
    }, [open])

    return (
        <div>
            <div id="sideBar" className={`fixed h-full overflow-x-hidden text-gray-700 bg-blue-400 w-[${width}px] 
            ${open ? 'translate-x-0' : dir === 'ltr' ? '-translate-x-full' : 'translate-x-full'} transform 
            transition-transform ease-in-out duration-400 ${className}`}>
                <nav className={`h-full`}>
                    {children}
                </nav>
            </div>
            <Col className={`self-center fixed mt-10 bg-blue-400 text-gray-700 ml-[${width}px] transform transition-transform ease-in-out duration-400 
                            ${dir === 'rtl' ? open ? `-translate-x-[${width}px]` : `translate-x-0` : open ? 'translate-x-0' : `-translate-x-[${width}px]`}`}>
                <IconButton
                    className={`${open ? 'rotate-0' : 'rotate-180'} transform transition-transform ease-out-in duration-500`}
                    onClick={() => setOpen(!open)}>
                    {dir === 'ltr' ? <IconCarbonChevronLeft/> : <IconCarbonChevronRight/>}
                </IconButton>
            </Col>
        </div>
    )
}

export let SideBarWidth = 260
