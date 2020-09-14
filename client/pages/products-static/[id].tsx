import { GetStaticPaths, GetStaticProps } from 'next';
import { Row, Col } from 'antd';
import { IProduct } from 'interfaces/IProduct';
import { productsApi } from 'services/ProductsApi/ProductsApi';

const Product = ({
  status,
  product,
}: {
  status: number;
  product: IProduct;
}) => {
  if (status === 404) {
    return <div>ERROR</div>;
  }

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

// In getStaticPaths(), you need to return the list of
// ids of product pages (/products/[id]) that you’d
// like to pre-render at build time. To do so,
// you can fetch all products from a database.
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await productsApi.find();

  const paths = response.data.map(product => ({
    params: {
      id: product.id,
    },
  }));

  // fallback: false means pages that don’t have the
  // correct id will 404.
  return {
    paths,
    fallback: false,
  };
};

// params will contain the id for each generated page.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await productsApi.findOne({ params });
  const { status, data: product } = response;

  return {
    props: {
      status,
      product: product[0],
    },
  };
};

export default Product;
