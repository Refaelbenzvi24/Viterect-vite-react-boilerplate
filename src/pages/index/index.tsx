import QueryHandler from '../../components/ReactQuery/QueryHandler'
import CryptoStats from '../../components/HomePage/CryptoStats'
import Cryptocurrencies from '../../components/HomePage/Cryptocurrencies'
import coinRankingApi from '../../services/CoinRanking'
import { Link } from 'react-router-dom'
import { Coin } from '../../services/CoinRanking/types'
import { Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import useStyle from "../../hooks/useStyle"


export default () => {
	const theme = useTheme()
	const style = useStyle(theme)
	const { t } = useTranslation()

	const { data, status } = coinRankingApi.coins().list(10)

	const coins: Coin[] | undefined = data?.data.data.coins?.slice(0, 10)

	return (
		<QueryHandler status={status}>


			<>
				<Typography sx={{ pb: 2 }} variant="h3">{t('Global Crypto Stats')}</Typography>

				<CryptoStats stats={data?.data.data.stats}/>

				<Stack direction="row"
				       justifyContent="space-between">
					<Typography variant="h3">{t('Top 10 Cryptocurrencies in the world')}</Typography>

					<Link to="/Cryptocurrencies" style={{ ...style.link.removeStyling, color: '#3b82f6', fontSize: "26px" }}>
						{t('Show More')}
					</Link>
				</Stack>

				<Cryptocurrencies coins={coins}/>
			</>
		</QueryHandler>
	)
}
