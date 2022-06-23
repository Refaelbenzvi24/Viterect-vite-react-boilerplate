import millify from 'millify'
import type { Coin } from 'services/CoinRanking/types'
import { Avatar, Card, Grid, Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"


const Cryptocurrencies = ({ coins }: { coins: Coin[] | undefined }) => {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Grid container>
			{coins && coins.length > 0
				&& (coins.map((coin, index) => (
					<Grid xl={2} lg={3} md={4} sm={6} xs={12} item sx={{ padding: theme.spacing(1, 1) }} key={coin.name}>
						<a href={coin.coinrankingUrl}
						   style={{ textDecoration: 'none', color: '#fafafa' }}>
							<Card sx={{ height: 240, padding: theme.spacing(2) }}>
								<Stack direction="row"
								       justifyContent="space-between"
								       sx={{ margin: theme.spacing(1, 0) }}>
									<Typography variant="subtitle1">
										{`${index + 1}. ${coin.name}`}
									</Typography>
									<Avatar src={coin.iconUrl} alt="coinImage"/>
								</Stack>

								<Stack sx={{ paddingTop: 7 }}>
									<Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
										{`${t('Price')}: ${millify(coin.price)}`}
									</Typography>

									<Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
										{`${t('Market Cap')}: ${millify(coin.marketCap)}`}
									</Typography>

									<Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
										{`${t('Daily Change')}: `}
										<span style={{ color: coin.change > 0 ? '#10b981' : '#ef4444' }}>
											{` ${coin.change}%`}
										</span>
									</Typography>
								</Stack>
							</Card>
						</a>
					</Grid>
				)))}
		</Grid>
	)
}

export default Cryptocurrencies
