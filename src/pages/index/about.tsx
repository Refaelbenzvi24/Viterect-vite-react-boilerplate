import { ReactComponent as about } from '../../components/about.md'
import { Grid } from "@mui/material"
import { useTheme } from "@mui/material/styles"


export default () => {
	const theme = useTheme()

	return (
		<Grid container sx={{ padding: theme.spacing(0, 5), width: "100%" }} dir="ltr">
			<div className="prose"
			     style={{ margin: "auto", padding: theme.spacing(0, 2) }}>
				{about({})}
			</div>
		</Grid>
	)
}
