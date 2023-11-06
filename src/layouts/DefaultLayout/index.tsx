import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Layout, MainContent } from './styles';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <Layout>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Layout>
  );
}
