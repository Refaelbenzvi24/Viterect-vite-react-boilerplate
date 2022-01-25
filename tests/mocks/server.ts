import {setupServer} from 'msw/node'
import coinRanking from './handlers/CoinRanking'
import bingNews from "./handlers/BingNews";

const server = setupServer(...coinRanking, ...bingNews)
export default server
