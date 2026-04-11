import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SoulGuidePage from './pages/SoulGuidePage';
import ConnectPage from './pages/ConnectPage';
import QuotesPage from './pages/QuotesPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/soul-guide" element={<SoulGuidePage />} />
          <Route path="/practices" element={<Navigate to="/soul-guide" replace />} />
          <Route path="/insights" element={<Navigate to="/quotes" replace />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
