import type { CoinGetResult } from '../../services/CoinRanking/types';
import millify from 'millify';
import Col from '../UI/Grid/Col';
import Subtitle from '../UI/Typograpy/Subtitle';
import Row from '../UI/Grid/Row';
import Select from '../UI/Form/Select';

type time = '1y' | '3h' | '3m' | '3y' | '5y' | '7d' | '24h' | '30d';

export default function (properties: CoinGetResult) {
  const { coin } = properties;

  const [timePeriod, setTimePeriod] = useState<time>('7d');

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${coin?.price && millify(coin.price)}`, icon: <></> },
    { title: 'Rank', value: coin?.rank, icon: <></> },
    { title: '24h Volume', value: `$ ${coin?.volume && millify(coin.volume)}`, icon: <></> },
    { title: 'Market Cap', value: `$ ${coin?.marketCap && millify(coin.marketCap)}`, icon: <></> },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${coin?.allTimeHigh.price && millify(coin.allTimeHigh.price)}`,
      icon: <></>,
    },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: coin?.numberOfMarkets, icon: <></> },
    { title: 'Number Of Exchanges', value: coin?.numberOfExchanges, icon: <></> },
    { title: 'Aprroved Supply', value: coin?.supply.confirmed ? <></> : <></>, icon: <></> },
    { title: 'Total Supply', value: `$ ${coin?.supply.total && millify(coin.supply.total)}`, icon: <></> },
    {
      title: 'Circulating Supply',
      value: `$ ${coin?.supply.circulating && millify(coin.supply.circulating)}`,
      icon: <></>,
    },
  ];

  if (coin) {
    return (
      <Col className="p-2">
        <Row className="w-full">
          <Col className="w-full">
            <h1 className="text-4xl text-center text-blue-600 font-bold">
              {coin.name}
              {' '}
              (
              {coin.symbol}
              )
              Price
            </h1>
            <Subtitle className="text-center pt-2">
              {coin.name}
              {' '}
              live price in US Dollar. View value statistics,
              market cap and supply.
            </Subtitle>
          </Col>
        </Row>

        <Row>
          <Col>
            <Select />
          </Col>
        </Row>
      </Col>
    );
  }
  return <></>;
}
