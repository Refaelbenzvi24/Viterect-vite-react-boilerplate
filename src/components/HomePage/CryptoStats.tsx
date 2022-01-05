import {Col, Row} from "../UI/Grid";
import Subtitle from "../UI/Typograpy/Subtitle";
import React from "react";
import Tooltip from "../UI/Tooltip";
import NumberFormat from "react-number-format";
import millify from "millify";
import i18n from "../../plugins/i18n";

type dictionaryKeys = "total" | "totalExchanges" | "totalMarketCap" | "total24hVolume" | "totalMarkets"
type CryptoStatsProps = { stats: dictionaryKeys }

export default ({stats}: CryptoStatsProps) => {
    const {t} = useTranslation()

    const dictionary = {
        total: t("Total Cryptocurrencies"),
        totalExchanges: t("Total Exchanges"),
        totalMarketCap: t("Total Market Cap"),
        total24hVolume: t("Total 24h Volume"),
        totalMarkets: t("Total Markets")
    } as const

    type dictionaryKeys = keyof typeof dictionary

    return (
        <Row className="pt-5 px-2 grid grid-flow-row justify-between grid-cols-2 w-full">
            {
                Object.keys(dictionary).map((key, index) => {
                    return (
                        <Col className="pt-4" key={index}>
                            <Subtitle className="">
                                {dictionary[key as dictionaryKeys]}
                            </Subtitle>
                            <NumberTooltip number={stats[key]}/>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

type NumberTooltipProps = { number: number }

const NumberTooltip = ({number}: NumberTooltipProps): JSX.Element => {
    const dir = i18n.dir()

    if (number && number > 1000)

        return (
            <Tooltip className={"top-[5px] " + (dir === 'ltr' ? 'left-[110%]' : 'right-[110%]')}
                     tooltip={
                         <NumberFormat value={number}
                                       displayType={"text"}
                                       thousandSeparator={true}/>}>
                <h2 className="text-4xl w-fit cursor-default">
                    {millify(number)}
                </h2>
            </Tooltip>
        )

    else return (
        <h2 className="text-4xl w-fit">
            {millify(number)}
        </h2>
    )
}
