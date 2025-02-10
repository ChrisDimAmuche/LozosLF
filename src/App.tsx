import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load pages with improved chunk naming
const Home = React.lazy(() => import('./pages/Home' /* webpackChunkName: "home" */));
const About = React.lazy(() => import('./pages/About' /* webpackChunkName: "about" */));
const Vision = React.lazy(() => import('./pages/Vision' /* webpackChunkName: "vision" */));
const Community = React.lazy(() => import('./pages/Community' /* webpackChunkName: "community" */));
const Whitepaper = React.lazy(() => import('./pages/Whitepaper' /* webpackChunkName: "whitepaper" */));
const Presale = React.lazy(() => import('./pages/Presale' /* webpackChunkName: "presale" */));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks' /* webpackChunkName: "how-it-works" */));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
        <ScrollToTop />
        <Navbar />
        <React.Suspense 
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
          }
        >
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vision/:id" element={<Vision />} />
              <Route path="community" element={<Community />} />
              <Route path="whitepaper" element={<Whitepaper />} />
              <Route path="presale" element={<Presale />} />
              <Route path="how-it-works" element={<HowItWorks />} />
            </Routes>
          </main>
        </React.Suspense>
        <Footer />
      </div>
  );
}

export default App;
