import { Col, Row } from '../UI/Grid';
import Subtitle from '../UI/Typograpy/Subtitle';
import React from 'react';
import Tooltip from '../UI/Tooltip';
import NumberFormat from 'react-number-format';
import millify from 'millify';
import i18n from '../../plugins/i18n';
import type { CoinStats } from '../../services/CoinRanking/types';

type Dictionary = Record<string, string>;

interface CryptoStatsProperties { stats: CoinStats | undefined }

export default function ({ stats }: CryptoStatsProperties) {
  const { t } = useTranslation();

  const dictionary: Dictionary = {
    total: t('Total Cryptocurrencies'),
    totalExchanges: t('Total Exchanges'),
    totalMarketCap: t('Total Market Cap'),
    total24hVolume: t('Total 24h Volume'),
    totalMarkets: t('Total Markets'),
  };

  return (
    <Row className="pt-5 px-2 grid grid-flow-row justify-between grid-cols-2 w-full">
      {
			  Object.keys(dictionary).map((key, index) => (
  <Col className="pt-4" key={index}>
    <Subtitle className="">
      {dictionary[key]}
    </Subtitle>
    <NumberTooltip number={stats ? stats[key as keyof CoinStats] : 0} />
  </Col>
				  ))
		  }
    </Row>
  );
}

interface NumberTooltipProperties { number: number }

function NumberTooltip({ number }: NumberTooltipProperties): JSX.Element {
  const dir = i18n.dir();

  if (number && number > 1000) {
    return (
      <Tooltip
        className={`top-[5px] ${dir === 'ltr' ? 'left-[110%]' : 'right-[110%]'}`}
        tooltip={(
          <NumberFormat
            value={number}
            displayType="text"
            thousandSeparator
          />
            )}
      >
        <h2 className="text-4xl w-fit cursor-default">
          {millify(number)}
        </h2>
      </Tooltip>
    );
  }

  return (
    <h2 className="text-4xl w-fit">
      {millify(number)}
    </h2>
  );
}
