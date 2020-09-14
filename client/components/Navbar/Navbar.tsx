import Link from 'next/link';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link href="/">
            <a>About</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/news-ssr">
            <a>News SSR</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/news-static">News Static</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/products-ssr">
            <a>Products SSR</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/products-static"> Products Static</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/products-static-incremental">
            Products Static Incremental
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export { Navbar };
