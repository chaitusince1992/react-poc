import './Layout.scss';
import Navigation from './Navigation/Navigation';
import PageWrapper from './RouteWrapper/RouteWrapper';
import { BrowserRouter } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <BrowserRouter>
        <Navigation></Navigation>
        <PageWrapper></PageWrapper>
      </BrowserRouter>
    </div>
  )
}

export default Layout;