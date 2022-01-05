import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"
import {ThemeName} from '../../../types/theme'
import Tooltip from "../Tooltip";
import IconButton from "../Buttons/IconButton";
import {ReactElementProps} from "../../../types";

export default (props: ReactElementProps) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const {t} = useTranslation()

    const themeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div {...props}>
            <Tooltip className="bottom-[40px] left-[-80%]" tooltip={t("Theme")}>
                <IconButton onClick={themeToggle}>
                    <Icon theme={theme}/>
                </IconButton>
            </Tooltip>
        </div>
    )
}


type IconProps = { theme: ThemeName }
const Icon = ({theme}: IconProps) => {
    if (theme === 'light')
        return <IconCarbonLight/>
    else return <IconCarbonMoon/>
}
