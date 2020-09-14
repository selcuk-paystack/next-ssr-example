import { Layout as AntLayout, Menu } from 'antd';
import { ReactChildren, ReactElement } from 'react';
import { Navbar } from 'components/Navbar';

const { Content } = AntLayout;

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <AntLayout>
      <Navbar />
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
    </AntLayout>
  );
};

export { Layout };
