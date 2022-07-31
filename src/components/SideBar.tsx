import { Link } from 'react-router-dom'

import SideBar from './UI/SideBar/SideBar'
import LinkButton from './UI/Buttons/LinkButton'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './UI/Theme/ThemeToggle'
import SideBarLink from "./UI/SideBar/SideBarLink"
import LongDivider from "./UI/Dividers/LongDivider"
import Tooltip from "./UI/Tooltip/Tooltip"
import FavIcon from '/favicon.svg'
import { css } from "@emotion/css"
import tw from "twin.macro"
import IconButton from "./UI/Buttons/IconButton"
import { Col, Row } from "./UI/Grid"


const sideBar = () => {
	const { t } = useTranslation()

	return (
		<SideBar>
			<Col className={css`${tw`flex h-full flex-col justify-between`}`}>
				<Col>
					<Link to="/" className={css`${tw`py-4 px-4 flex flex-row justify-around items-center`}`}>
						<img src={FavIcon} className="max-w-[50px]" alt="LOGO"/>

						<h3 className={css`${tw`px-3 text-2xl font-semibold tracking-widest text-gray-900 dark:text-white
																		uppercase rounded-lg focus:outline-none`}`}>
							{t('App Name')}
						</h3>
					</Link>

					<SideBarLink id="home-button">
						<LinkButton to="/">{t('Home')}</LinkButton>
					</SideBarLink>

					<SideBarLink id="crypto-button">
						<LinkButton to="/cryptocurrencies">{t('Cryptocurrencies')}</LinkButton>
					</SideBarLink>

					<SideBarLink id="news-button">
						<LinkButton to="/news">{t('News')}</LinkButton>
					</SideBarLink>

					<SideBarLink id="about-button">
						<LinkButton to="/about">{t('About')}</LinkButton>
					</SideBarLink>

					<SideBarLink id="404-button">
						<LinkButton to="/someNonExistingPage">{t('404')}</LinkButton>
					</SideBarLink>
				</Col>

				<Col>
					<LongDivider/>
					<Row className="py-3 px-3 justify-around">

						<Tooltip placement="top-center" tooltip={t('Settings')}>
							<IconButton>
								<IconMdiSettings/>
							</IconButton>
						</Tooltip>

						<Tooltip placement="top-center" tooltip={t('Notifications')}>
							<IconButton>
								<IconMdiBellOutline/>
							</IconButton>
						</Tooltip>

						<Tooltip placement="top-center" tooltip={t('Theme')}>
							<ThemeToggle/>
						</Tooltip>

						<Tooltip placement="top-center" tooltip={t('Language')}>
							<LanguageSelector/>
						</Tooltip>

						<Tooltip placement="top-center" tooltip={t('Logout')}>
							<IconButton>
								<IconMdiLogout/>
							</IconButton>
						</Tooltip>

					</Row>
				</Col>
			</Col>
		</SideBar>
	)
}

export default sideBar
