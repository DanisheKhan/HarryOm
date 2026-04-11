import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import SeoManager from './components/SeoManager';
import NetworkOptimizer from './components/NetworkOptimizer';

// Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SoulGuidePage = lazy(() => import('./pages/SoulGuidePage'));
const ConnectPage = lazy(() => import('./pages/ConnectPage'));
const QuotesPage = lazy(() => import('./pages/QuotesPage'));

function App() {
  return (
    <Router>
      <NetworkOptimizer />
      <ScrollToTop />
      <SeoManager />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
