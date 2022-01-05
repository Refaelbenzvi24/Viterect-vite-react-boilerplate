import React from "react"
import i18n from '../plugins/i18n'
import {Language} from "../plugins/i18n"
import {useTranslation} from "react-i18next"
import {LocalStorage} from "../modules/LocalStorage"
import IconButton from "./UI/Buttons/IconButton";
import Tooltip from "./UI/Tooltip";

import {ReactElementProps} from "../types";
import Menu from "./UI/Menu/Menu";
import MenuItem from "./UI/Menu/MenuItem";
import Divider from "./UI/Dividers/Divider";

export default (props: ReactElementProps) => {
    const {t} = useTranslation()
    const [language, setLanguage] = useState(LocalStorage.getLanguage())

    const languageToggle = () => {
        if (language === 'en')
            changeLanguage('he')
        else changeLanguage('en')
    }

    const changeLanguage = (language: Language): void => {
        setLanguage(language);
        i18n.changeLanguage(language).then()
        document.dir = i18n.dir()
        // theme.direction = i18n.dir
        //TODO:
    }

    return (
        <div {...props}>
            <Tooltip className="bottom-[200%] left-[-80%]" tooltip={t("Language")}>
                <IconButton className={"block"} onClick={() => languageToggle()}>
                    <IconCarbonLanguage/>
                </IconButton>
            </Tooltip>

            {/* Uncomment for Language selector with menu */}

            {/*<Menu anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}*/}
            {/*      transformOrigin={{vertical: 'top', horizontal: 'center'}}*/}
            {/*      anchorY={"-50%"}*/}
            {/*      content={*/}
            {/*          <div>*/}
            {/*              <MenuItem className="cursor-pointer" onClick={() => changeLanguage("en")}>*/}
            {/*                  {t("English")}*/}
            {/*              </MenuItem>*/}

            {/*              <Divider className="my-1"/>*/}

            {/*              <MenuItem className="cursor-pointer" onClick={() => changeLanguage("he")}>*/}
            {/*                  {t("Hebrew")}*/}
            {/*              </MenuItem>*/}
            {/*          </div>*/}
            {/*      }>*/}
            {/*    <Tooltip className="bottom-[200%] left-[-80%]" tooltip={t("Language")}>*/}
            {/*        <IconButton className={"block"}>*/}
            {/*            <IconCarbonLanguage/>*/}
            {/*        </IconButton>*/}
            {/*    </Tooltip>*/}
            {/*</Menu>*/}
        </div>
    )
}
