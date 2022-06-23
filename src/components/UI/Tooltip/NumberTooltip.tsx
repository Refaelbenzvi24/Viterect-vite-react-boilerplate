import NumberFormat from "react-number-format"
import millify from "millify"
import { Tooltip, Typography } from "@mui/material"


interface NumberTooltipProps {
	number: number;
	tooltipPlacement?:
	| 'bottom-end'
	| 'bottom-start'
	| 'bottom'
	| 'left-end'
	| 'left-start'
	| 'left'
	| 'right-end'
	| 'right-start'
	| 'right'
	| 'top-end'
	| 'top-start'
	| 'top'
}

const NumberTooltip = (props: NumberTooltipProps): JSX.Element => {
	const { number, tooltipPlacement } = props

	if (number && number > 1000) {
		return (
			<Tooltip placement={tooltipPlacement}
				title={(
					<NumberFormat
						value={number}
						displayType="text"
						thousandSeparator
					/>
				)}>
				<Typography variant="h4" sx={{ width: "fit-content" }}>
					{millify(number)}
				</Typography>
			</Tooltip>
		)
	}

	return (
		<Typography variant="h4">
			{millify(number)}
		</Typography>
	)
}

export default NumberTooltip
