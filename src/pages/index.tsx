import React from 'react'
import Plugins from 'plugins/index'
import {Outlet} from "react-router";
import SideBar from '../components/SideBar'
import Main from '../components/UI/Main/Main'

export default function () {
    return (
            <div className="h-full w-full mx-auto">
                <SideBar/>
                <Main>
                    <Outlet/>
                </Main>
            </div>
    )
}
