import QueryHandler from '../../components/QueryHandler';
import { bingNewsApi } from '../../services/BingNews';
import { Row, Col } from '../../components/UI/Grid';
import News from '../../components/HomePage/News';

export default function () {
  const { data, status } = bingNewsApi.news().get();
  const result = data?.data;

  return (
    <QueryHandler status={status}>
      <Row>

        <Col className="w-full">

          <Row className="w-full">

            <Col className="w-full px-4">
              <News value={result?.value} />
            </Col>

          </Row>

        </Col>

      </Row>
    </QueryHandler>
  );
}
