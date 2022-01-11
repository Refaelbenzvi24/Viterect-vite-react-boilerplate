import type {NewsGetResult} from '../../services/BingNews/types';
import {Row, Col} from '../UI/Grid';
import Card from '../UI/Cards/Card';
import moment from 'moment';
import Subtitle from '../UI/Typograpy/Subtitle';

export default function ({value}: NewsGetResult) {
	
	if (value && value.length > 0) {
		return (
		  <Row
			dir="ltr"
			className="pt-5 px-1 justify-between grid grid-flow-row w-full
						2xl:grid-cols-5
						xl:grid-cols-4
						md:grid-cols-3
						sm:grid-cols-2
						xs:grid-cols-1">
			  {
				  value.map((newsItem, index) => (
					<Col className="p-2 grid justify-items-stretch" key={index}>
						<Card className="min-h-100 max-h-100 p-0 justify-self-center relative">
							<a className="absolute w-full" href={newsItem.url}>
								<img
								  className={`relative overflow-hidden
										  ${newsItem?.image?.thumbnail?.contentUrl
								            ? 'rounded-t min-h-[160px] max-h-[160px] w-full z-1 bg-auto'
								            : 'min-h-[160px]'}`}
								  src={newsItem.image?.thumbnail?.contentUrl}
								  alt=""
								/>
							</a>
							
							<Row className="pt-1 px-2 mt-[160px] relative">
								<Col>
									<Row>
										<a className="break-all" href={newsItem.url}>
											<h1 className="text-lg line-clamp-2">{newsItem.name}</h1>
										</a>
									</Row>
									
									<Row className="px-1">
										<Subtitle className="w-fit line-clamp-5">
											{newsItem.description}
										</Subtitle>
									</Row>
								</Col>
							</Row>
							
							<Row className="px-3 w-full absolute justify-between bottom-0 pb-3">
								<Col>
									<Row>
										<img
										  className="w-5 h-5"
										  src={newsItem.provider[0]?.image?.thumbnail?.contentUrl}
										  alt=""
										/>
										<Subtitle className="relative px-2 text-sm break-all line-clamp-1">
											{newsItem.provider[0].name}
										</Subtitle>
									</Row>
								</Col>
								
								<Subtitle
								  className="relative px-2 text-sm text-gray-400 dark:text-true-gray-400 break-all line-clamp-1"
								>
									{moment(newsItem?.datePublished).startOf('s').fromNow()}
								</Subtitle>
							</Row>
						</Card>
					</Col>
				  ))
			  }
		  </Row>
		);
	}
	return <></>;
}
