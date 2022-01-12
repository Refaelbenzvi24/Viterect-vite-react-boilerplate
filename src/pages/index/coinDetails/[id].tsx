import {useParams} from 'react-router-dom'
import QueryHandler from '../../../components/QueryHandler'
import {coinRankingApi} from '../../../services/CoinRanking'
import Row from '../../../components/UI/Grid/Row'
import Col from '../../../components/UI/Grid/Col'
import CoinDetails from '../../../components/Cryptocurrencies/CoinDetails'


export default function () {
    const {id}           = useParams();
    const {data, status} = coinRankingApi.coin().get(id);
    const result         = data?.data.data;

    return (
            <QueryHandler status={status}>
                <Row className="w-full px-4 pt-3">

                    <Col className="w-full">

                        <Row className="w-full">

                            <Col className="w-full px-4">
                                <CoinDetails coin={result?.coin}/>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </QueryHandler>
    );
}
