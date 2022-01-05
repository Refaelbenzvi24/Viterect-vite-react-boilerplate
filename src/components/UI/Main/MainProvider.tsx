import {ReactElement, useEffect} from "react";
import {getInitialMain, MainContext} from "./MainContext";
import {MainProps, MainProviderOpts} from "../../../types/main";
import WindowVars from "../../../mixins/WindowVars";
import {defaultMainData} from "./MainContext";

export default (props: MainProviderOpts): ReactElement => {
    const [data, setData] = useState(getInitialMain)
    // const {windowWidth, windowHeight} = WindowVars()

    const {children} = props

    const rawSetData = () => {
        const sideBar = (!!document.getElementById('sideBar')) || data?.sideBar || defaultMainData.sideBar
        const sideBarWidth = document.getElementById('sideBar')?.clientWidth || data?.sideBarWidth || defaultMainData.sideBar

        const transformedData = {
            sideBar,
            sideBarWidth
        }

        setData(transformedData)
    }

    useEffect(() => {
        document.getElementById('sideBar')?.addEventListener('resize', ev => rawSetData())

        return () => {
            document.getElementById('sideBar')?.removeEventListener('resize', ev => rawSetData())
        }
    }, [])

    return <MainContext.Provider value={{data, setData}}>{children}</MainContext.Provider>
}
