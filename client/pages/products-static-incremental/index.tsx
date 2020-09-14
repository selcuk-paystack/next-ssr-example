import { GetStaticProps } from 'next';
import { Row, Col, Card } from 'antd';
import { IProduct } from 'interfaces/IProduct';
import { productsApi } from 'services/ProductsApi/ProductsApi';
import Link from 'next/link';

const { Meta } = Card;

const ProductsStatic = ({ products }: { products: IProduct[] }) => {
  return (
    <>
      <Row>
        <h1>Products Static Incremental</h1>
      </Row>
      <Row gutter={24}>
        {products.length &&
          products.map(product => (
            <Link
              key={product.id}
              href="/products-static-incremental/[id]"
              as={`/products-static-incremental/${product.id}`}
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await productsApi.find();

  return {
    props: {
      products: response.data,
    },
  };
};

export default ProductsStatic;
