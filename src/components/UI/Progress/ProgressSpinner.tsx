import { ImpulseSpinner } from 'react-spinners-kit'
import { Grid } from "@mui/material"


const ProgressSpinner = () => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			sx={{ height: "100%" }}
		>
			<ImpulseSpinner size={75} backColor="#626262" frontColor="#536473"/>
		</Grid>
	)
}

export default ProgressSpinner
