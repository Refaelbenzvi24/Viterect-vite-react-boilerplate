import { setupWorker } from 'msw'
import coinsRanking from './coinsRanking'
import bingNews from "./bingNews"

const server = setupWorker(...coinsRanking, ...bingNews)
export default server
