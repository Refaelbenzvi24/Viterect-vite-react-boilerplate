import { Toolbar, AppBar, IconButton, Stack, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import useIsMobile from "../hooks/window/useIsMobile"
import useStyle from "../hooks/useStyle"
import FavIcon from "/favicon.svg"
import { Link } from "react-router-dom"


function AppBarChild({ toggle, setToggle }: { toggle: boolean, setToggle: (state: boolean) => void }) {
	const isMobile = useIsMobile()
	const theme    = useTheme()
	const style    = useStyle(theme)
	const { t }    = useTranslation()

	return (
		<AppBar position="fixed" sx={!isMobile ? style.zIndex.appBar.fixed : {}}>
			< Toolbar disableGutters variant="dense">
				<IconButton aria-label="Open drawer" onClick={() => setToggle(!toggle)}>
					<IconMdiMenu/>
				</IconButton>

				<Link to="/" style={{ textDecoration: 'none', color: '#fafafa' }}>
					<Stack direction="row"
					       sx={{ padding: theme.spacing(1, 0) }}>
						<img src={FavIcon}
						     alt="LOGO"
						     style={{ maxWidth: 50, padding: theme.spacing(0, 1) }}/>

						<Typography sx={style.typography.appTitle}>
							{t('App Name')}
						</Typography>
					</Stack>
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default AppBarChild
