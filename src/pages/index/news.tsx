import QueryHandler from '../../components/ReactQuery/QueryHandler'
import bingNewsApi from '../../services/BingNews'
import { Row, Col } from '../../components/UI/Grid'
import News from '../../components/HomePage/News'


export default () => {
	const { data, status, } = bingNewsApi.news().get()

	return (
		<QueryHandler status={status}>
			<Row>

				<Col className="w-full">

					<Row className="w-full">

						<Col className="w-full px-4">
							<News value={data?.data?.value}/>
						</Col>

					</Row>

				</Col>

			</Row>
		</QueryHandler>
	)
}
