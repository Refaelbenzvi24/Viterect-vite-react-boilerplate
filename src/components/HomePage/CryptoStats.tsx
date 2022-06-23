import type { CoinStats } from 'services/CoinRanking/types'
import NumberTooltip from "../UI/Tooltip/NumberTooltip"
import { Grid, Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import useStyle from "../../hooks/useStyle"


interface CryptoStatsProps {
	stats: CoinStats | undefined;
}

const CryptoStats = ({ stats }: CryptoStatsProps) => {
	const theme = useTheme()
	const style = useStyle(theme)
	const { t } = useTranslation()

	const dictionary: Record<string, string> = {
		total:          t('Total Cryptocurrencies'),
		totalExchanges: t('Total Exchanges'),
		totalMarketCap: t('Total Market Cap'),
		total24hVolume: t('Total 24h Volume'),
		totalMarkets:   t('Total Markets'),
	}


	return (
		<Grid container>
			{
				Object.keys(dictionary)
					.map((key) => (
						<Grid xs={6}
						      item
						      sx={{ p: 1 }}
						      key={dictionary[key]}>

							<Stack className="pt-4" direction="column">

								<Typography variant="subtitle1"
								            sx={style.typography.subtitle1}>
									{dictionary[key]}
								</Typography>

								<NumberTooltip tooltipPlacement="right"
								               number={stats ? stats[key as keyof CoinStats] : 0}/>

							</Stack>
						</Grid>
					))
			}
		</Grid>
	)
}

export default CryptoStats
