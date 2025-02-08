import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { AuthProvider } from './components/auth/AuthProvider';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Vision = React.lazy(() => import('./pages/Vision'));
const Community = React.lazy(() => import('./pages/Community'));
const Whitepaper = React.lazy(() => import('./pages/Whitepaper'));
const Presale = React.lazy(() => import('./pages/Presale'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const Login = React.lazy(() => import('./pages/admin/Login'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <Navbar />
          <React.Suspense 
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
              </div>
            }
          >
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
        <Route path="/vision/:id" element={<Vision />} />
        <Route path="/community" element={<Community />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
                <Route path="/presale" element={<Presale />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/admin/*"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </React.Suspense>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;