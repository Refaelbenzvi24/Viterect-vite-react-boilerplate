import QueryHandler from "../../components/QueryHandler";
import Row from "../../components/UI/Grid/Row";
import Col from "../../components/UI/Grid/Col";
import {CoinRankingApi} from "../../services/CoinRanking";
import Cryptocurrencies from "../../components/Cryptocurrencies/Cryptocurrencies";
import React from "react";

export default () => {
    const {t} = useTranslation()

    const {data, status} = CoinRankingApi.coins().get(50)
    const result = data?.data.data

    return (
        <QueryHandler status={status}>
            <Row className="w-full px-4 pt-3">
                <Col className="w-full">
                    <Row className="w-full">
                        <Col className="w-full px-4">
                            <Cryptocurrencies coins={result?.coins}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </QueryHandler>
    )
}
