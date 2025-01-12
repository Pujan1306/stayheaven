import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FixedNavFooter } from './components/navigation/FixedNavFooter';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { GuidePage } from './pages/GuidePage';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pb-[72px]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/guide" element={<GuidePage />} />
          </Routes>
        </main>
        <Footer />
        <FixedNavFooter />
      </div>
    </Router>
  );
}