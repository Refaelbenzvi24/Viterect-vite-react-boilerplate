import i18n from "i18next"
import Tooltip from "./Tooltip"
import { convertToElId } from "../../../modules/Util"
import NumberFormat from "react-number-format"
import millify from "millify"


interface NumberTooltipProps {
	number: number;
	id: string;
}

const NumberTooltip = (props: NumberTooltipProps): JSX.Element => {
	const { number, id } = props
	const dir            = i18n.dir()


	if (number && number > 1000) {
		return (
			<Tooltip placement={dir === "ltr" ? "center-right" : "center-left"}
			         id={convertToElId(`${id}-tooltip`)}
			         tooltip={
				         <NumberFormat value={number}
				                       displayType="text"
				                       thousandSeparator/>
			         }>
				<h2 className="text-4xl w-fit cursor-default" id={convertToElId(`${id}-number`)}>
					{millify(number)}
				</h2>
			</Tooltip>
		)
	}

	return (
		<h2 className="text-4xl w-fit">
			{millify(number)}
		</h2>
	)
}

export default NumberTooltip
