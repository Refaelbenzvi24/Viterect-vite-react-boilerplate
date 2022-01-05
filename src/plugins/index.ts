import nProgress from './nprogress'
import "./i18n";
import "./pwa";
import {i18nInstall} from "./i18n";

export default (): void => {
    i18nInstall()
    nProgress()
}
