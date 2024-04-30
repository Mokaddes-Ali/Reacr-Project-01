import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import { Fragment } from 'react';
import Navbars from './Components/Navbars/Navbars';
import NotfoundPage from './pages/NotfoundPage';
import CourcesPage from './pages/CourcesPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
       <Navbars/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ServicesPage" element={<ServicesPage />} />
              <Route path="/CourcesPage" element={<CourcesPage />} />
              <Route path="/PortfolioPage" element={<PortfolioPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/AboutPage" element={<AboutPage />} />
              <Route path="*" element={<NotfoundPage />} />
          </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
