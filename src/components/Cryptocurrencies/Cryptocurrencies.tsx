import Row from "../UI/Grid/Row";
import Col from "../UI/Grid/Col";
import Card from "../UI/Cards/Card";
import Subtitle from "../UI/Typograpy/Subtitle";
import Container from "../UI/Grid/Container";
import millify from "millify";
import i18n from "../../plugins/i18n";

interface Coin {
    name: string,
    iconUrl: string,
    price: number,
    marketCap: number,
    change: number
}

interface CryptocurrenciesProps {
    coins: [Coin],
    limit?: number
}

export default ({coins, limit}: CryptocurrenciesProps) => {
    const {t} = useTranslation()
    const dir = i18n.dir()

    return (
        <Row className="pt-5 px-1 grid grid-flow-row justify-between grid-cols-4 w-full">
            {coins.map((coin, index) => {
                return (
                    <Col className="p-2" key={index}>
                        <Card className="h-60">
                            <Row className="grid grid-flow-row grid-cols-1 p-2">
                                <div className="w-fit relative">
                                    <h3 className="text-lg">{index + 1}. {coin.name}</h3>
                                    <img className={"w-10 absolute top-0 " + (dir === 'ltr' ? 'right-[-8px]' : 'left-[-8px]')} src={coin.iconUrl}/>
                                </div>

                                <Col className="pt-18">
                                    <Row>
                                        <Subtitle>{t("Price")}: {millify(coin.price)}</Subtitle>
                                    </Row>

                                    <Row className="pt-1">
                                        <Subtitle>{t("Market Cap")}: {millify(coin.marketCap)}</Subtitle>
                                    </Row>

                                    <Row className="pt-1">
                                        <Subtitle>
                                            {t("Daily Change")}:
                                            <span className={ coin.change === 0 ? '' : (coin.change > 0 ? 'text-green-500' : 'text-red-500')}>
                                                {' ' + coin.change}%
                                            </span>
                                        </Subtitle>
                                    </Row>

                                </Col>
                            </Row>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}
