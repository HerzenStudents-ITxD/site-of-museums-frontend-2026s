import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CollectionsPage from './pages/CollectionsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-museum-paper text-museum-ink">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
