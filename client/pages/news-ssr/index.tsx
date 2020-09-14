import { GetServerSideProps } from 'next';
import { Row, Col, Card } from 'antd';
import Link from 'next/link';
import { NewsApiResponse } from 'interfaces/INewsArticle';
import { newsApi } from 'services/NewsApi/NewsApi';

const { Meta } = Card;

const NewsSSR = ({ newsResponse }: { newsResponse: NewsApiResponse }) => {
  const { articles } = newsResponse;

  return (
    <>
      <Row>
        <h1>News SSR</h1>
      </Row>
      <Row gutter={24}>
        {articles.length &&
          articles.map(article => (
            <Link key={article.url} href={article.url}>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  style={{ padding: 20, marginBottom: 20 }}
                  cover={<img alt={article.title} src={article.urlToImage} />}
                >
                  <Meta title={article.title} description={article.content} />
                </Card>
              </Col>
            </Link>
          ))}
      </Row>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await newsApi.find();

  return {
    props: {
      newsResponse: response.data,
    },
  };
};

export default NewsSSR;
