import { GetServerSideProps } from 'next';
import { Row, Col, Card } from 'antd';
import { productsApi } from 'services/ProductsApi/ProductsApi';
import { IProduct } from 'interfaces/IProduct';
import Link from 'next/link';

const { Meta } = Card;

const ProductsSSR = ({ products }: { products: IProduct[] }) => {
  console.log('PRODUCTS: ', products);

  return (
    <>
      <Row>
        <h1>Products SSR</h1>
      </Row>
      <Row gutter={24}>
        {products.length &&
          products.map(product => (
            <Link
              key={product.id}
              href="/products-ssr/[id]"
              as={`/products-ssr/${product.id}`}
            >
              <Col xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  style={{ padding: 20, marginBottom: 20 }}
                  cover={
                    <img
                      alt={product.name}
                      src={`http://localhost:1337${product.files[0].url}`}
                    />
                  }
                >
                  <Meta
                    title={product.name}
                    description={`${product.currency} ${product.regularPrice}`}
                  />
                </Card>
              </Col>
            </Link>
          ))}
      </Row>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await productsApi.find();

  return {
    props: {
      products: response.data,
    },
  };
};

export default ProductsSSR;
