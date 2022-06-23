import { Outlet } from 'react-router'
import Drawer from '../components/Drawer'
import { CssBaseline, Toolbar } from "@mui/material"
import useToggle from "../hooks/useToggle"
import useIsMobile from "../hooks/window/useIsMobile"
import AppBar from "../components/AppBar"
import Box from "@mui/material/Box"
import useStyle from "../hooks/useStyle"


export default () => {
	const isMobile        = useIsMobile()
	const drawerUseToggle = useToggle(isMobile)
	const style           = useStyle()

	return (
		<Box sx={{ display: 'flex', height: "100%" }}>
			<CssBaseline>
				<AppBar {...drawerUseToggle}/>
				<Drawer {...drawerUseToggle}/>

				<Box component="main" sx={style.main}>
					<Toolbar/>
					<Outlet/>
				</Box>
			</CssBaseline>
		</Box>
	)
}
