import i18n from "i18next"
import Tooltip from "./Tooltip"
import { convertToElId } from "../../../modules/Util"
import NumberFormat from "react-number-format"
import millify from "millify"


interface NumberTooltipProps {
	number: number;
	id: string;
}

export default (props: NumberTooltipProps): JSX.Element => {
	const dir = i18n.dir()

	const {
		      number,
		      id,
	      } = props

	if (number && number > 1000) {
		return (
			<Tooltip
				className={`top-[5px] ${dir === 'ltr' ? 'left-[110%]' : 'right-[110%]'}`}
				id={convertToElId(`${id}-tooltip`)}
				tooltip={(
					<NumberFormat
						value={number}
						displayType="text"
						thousandSeparator
					/>
				)}
			>
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
