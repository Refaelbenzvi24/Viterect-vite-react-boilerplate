import nProgress from './nprogress'
import { i18nInstall } from './i18n'
// import './pwa';

export default (): void => {
	i18nInstall()
	nProgress()
};
