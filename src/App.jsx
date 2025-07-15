import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SoulGuidePage from './pages/SoulGuidePage';
import PracticesPage from './pages/PracticesPage';
import WisdomPage from './pages/WisdomPage';
import InsightsPage from './pages/InsightsPage';
import ConnectPage from './pages/ConnectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/soul-guide" element={<SoulGuidePage />} />
          <Route path="/practices" element={<PracticesPage />} />
          <Route path="/wisdom" element={<WisdomPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
