import LanguageSelector from './LanguageSelector'
import ThemeToggle from './UI/Theme/ThemeToggle'
import { IconButton, Stack, Toolbar, Tooltip } from "@mui/material"
import React, { useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from "react-router-dom"
import useIsMobile from "../hooks/window/useIsMobile"
import useStyle from "../hooks/useStyle"


const ChildDrawer = ({ toggle, setToggle }: { toggle: boolean, setToggle: (state: boolean) => void }) => {
	const { t }    = useTranslation()
	const theme    = useTheme()
	const style    = useStyle(theme)
	const isMobile = useIsMobile()

	useEffect(() => {
		setToggle(!isMobile)
	}, [isMobile])

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
			return
		}

		setToggle(open)
	}

	const linksList = [
		{ id: "home-button", text: t('Home'), route: "/", icon: <IconMdiHome/> },
		{ id: "crypto-button", text: t('Cryptocurrencies'), route: "/cryptocurrencies", icon: <IconMdiBitcoin/> },
		{ id: "about-button", text: t('About'), route: "/about", icon: <IconMdiInformation/> },
		{ id: "404-button", text: t('404'), route: "/someNonExistingPage", icon: <IconBiExclamationTriangleFill/> },
	]

	const footerActions = [
		{ id: "settings", tooltip: t('Settings'), icon: <IconMdiSettings/> },
		{ id: "notifications", tooltip: t('Notifications'), icon: <IconMdiBellOutline/> },
		{ id: "theme", component: ThemeToggle },
		{ id: "language", component: LanguageSelector },
		{ id: "logout", tooltip: t('Logout'), icon: <IconMdiLogout/> },
	]

	return (
		<Drawer anchor="left"
		        open={toggle}
		        hideBackdrop={!isMobile}
		        variant={isMobile ? "temporary" : "persistent"}
		        sx={!isMobile && toggle ? {
			        width:                  250,
			        flexShrink:             0,
			        [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
		        } : {}}
		        PaperProps={theme.direction === 'rtl' ? { style: { left: "unset", right: 0 } } : {}}
		        onClose={toggleDrawer(false)}>

			<Stack direction="column" justifyContent="space-between" style={style.layout.fHeight}>
				<Stack direction="column">
					<Divider/>

					{!isMobile && <Toolbar/>}
					<Box role="presentation" style={isMobile ? style.layout.height("250px") : {}}>
						<List>
							{
								linksList.map((item) => (
									<Link key={item.text}
									      to={item.route}
									      style={style.link.removeStyling}>
										<ListItem disablePadding
										          onClick={(event) => (isMobile ? toggleDrawer(false)(event) : '')}>
											<ListItemButton id={item.id}>
												<ListItemIcon>
													{item.icon}
												</ListItemIcon>
												<ListItemText primary={item.text}/>
											</ListItemButton>
										</ListItem>
									</Link>
								))
							}
						</List>
					</Box>
				</Stack>

				<div>
					<Divider/>
					<Stack justifyContent="space-around"
					       direction="row">
						{
							footerActions.map((actionItem) => (
								actionItem.component
									?
									(
										<actionItem.component iconSize="20px"
										                      key={actionItem.id}/>
									)
									:
									(
										<Tooltip title={actionItem.tooltip}
										         placement="top"
										         key={actionItem.id}>
											<IconButton style={style.icon.md}>
												{actionItem.icon}
											</IconButton>
										</Tooltip>
									)))
						}
					</Stack>
				</div>
			</Stack>

		</Drawer>
	)
}

export default ChildDrawer
