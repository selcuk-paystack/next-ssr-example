import { GetServerSideProps } from 'next';
import { Row, Col } from 'antd';
import { IProduct } from 'interfaces/IProduct';
import { productsApi } from 'services/ProductsApi/ProductsApi';

const Product = ({ product }: { product: IProduct }) => {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <img
          src={`http://localhost:1337${product.files[0].url}`}
          style={{ width: '100%' }}
          alt={product.name}
        />
      </Col>
      <Col span={14}>
        <h2>{product.name}</h2>
        <p>
          {product.currency} {product.regularPrice}
        </p>
        <p>{product.description}</p>
      </Col>
    </Row>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const response = await productsApi.findOne({
    params,
  });

  return {
    props: {
      product: response.data[0],
    },
  };
};

export default Product;
