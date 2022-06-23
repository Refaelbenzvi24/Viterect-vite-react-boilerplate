import { Theme } from "@mui/material"
import { useTheme } from "@mui/material/styles"


const useStyle = (theme: Theme = useTheme()) => ({
	layout:     {
		height:  (height: number | string) => ({ height }),
		fHeight: { height: "100%" },
		mWidth:  {},
	},
	main:       { flexGrow: 1, padding: theme.spacing(1, 4), height: "100%" },
	zIndex:     {
		appBar: {
			fixed: { zIndex: theme.zIndex.drawer + 1 },
		},
	},
	typography: {
		appTitle:  { alignSelf: "center", fontSize: "26px", textTransform: "uppercase" },
		subtitle1: { color: theme.palette.text.secondary },
	},
	link:       {
		removeStyling: { textDecoration: 'none', color: theme.palette.text.primary },
	},
	font:       {
		size: (size: number | string) => ({ fontSize: size }),
	},
	icon:       {
		md: { fontSize: "20px" },
	},
	drawer:     {
		width:                  250,
		flexShrink:             0,
		[`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
	},
})

export default useStyle
