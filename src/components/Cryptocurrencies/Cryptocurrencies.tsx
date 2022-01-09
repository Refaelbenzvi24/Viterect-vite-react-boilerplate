import Row from '../UI/Grid/Row';
import Col from '../UI/Grid/Col';
import Card from '../UI/Cards/Card';
import Subtitle from '../UI/Typograpy/Subtitle';
import millify from 'millify';
import i18n from '../../plugins/i18n';
import type { Coin } from '../../services/CoinRanking/types';
import { Link } from 'react-router-dom';

export default function ({ coins }: { coins: [Coin] | undefined }) {
  const { t } = useTranslation();
  const dir = i18n.dir();

  if (coins && coins.length > 0) {
    return (
      <Row className="pt-5 px-1 justify-between grid grid-flow-row w-full
						2xl:grid-cols-5
						xl:grid-cols-4
						md:grid-cols-3
						sm:grid-cols-2
						xs:grid-cols-1"
      >
        {coins.map((coin, index) => (
          <Col className="p-2" key={index}>
            <Link to={`/cryptocurrencies/${coin.uuid}`}>
              <Card className="h-60">
                <Row className="grid grid-flow-row grid-cols-1 p-2">
                  <div className="w-fit relative">
                    <h3 className="text-lg">
                      {index + 1}
                      .
                      {' '}
                      {coin.name}
                    </h3>
                    <img
                      className={`w-10 absolute top-0 ${dir === 'ltr' ? 'right-[-8px]' : 'left-[-8px]'}`}
                      src={coin.iconUrl}
                      alt="coinImage"
                    />
                  </div>

                  <Col className="pt-18">
                    <Row>
                      <Subtitle>
                        {t('Price')}
                        :
                        {' '}
                        {millify(coin.price)}
                      </Subtitle>
                    </Row>

                    <Row className="pt-1">
                      <Subtitle>
                        {t('Market Cap')}
                        :
                        {' '}
                        {millify(coin.marketCap)}
                      </Subtitle>
                    </Row>

                    <Row className="pt-1">
                      <Subtitle>
                        {t('Daily Change')}
                        :
                        <span
                          className={coin.change === 0 ? '' : (coin.change > 0 ? 'text-green-500' : 'text-red-500')}
                        >
                          {` ${coin.change}`}
                          %
                        </span>
                      </Subtitle>
                    </Row>

                  </Col>
                </Row>
              </Card>
            </Link>
          </Col>
				  ))}
      </Row>
    );
  }
  return (
    <>
    </>
  );
}
