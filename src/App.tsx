import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
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

// Lazy load admin components
const ContentManagement = React.lazy(() => import('./pages/admin/components/ContentManagement'));
const ImageManagement = React.lazy(() => import('./pages/admin/components/ImageManagement'));
const CommunityManagement = React.lazy(() => import('./pages/admin/components/CommunityManagement'));
const PartnersManagement = React.lazy(() => import('./pages/admin/components/PartnersManagement'));
const FoundersManagement = React.lazy(() => import('./pages/admin/components/FoundersManagement'));
const TokenomicsManagement = React.lazy(() => import('./pages/admin/components/TokenomicsManagement'));
const RoadmapManagement = React.lazy(() => import('./pages/admin/components/RoadmapManagement'));

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
                {/* Admin routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin" element={<Navigate to="/admin/content" replace />} />
                <Route path="/admin/content" element={
                  <ProtectedRoute>
                    <AdminDashboard>
                      <ContentManagement />
                    </AdminDashboard>
                  </ProtectedRoute>
                } />
                <Route path="/admin/images" element={
                  <ProtectedRoute>
                    <AdminDashboard>
                      <ImageManagement />
                    </AdminDashboard>
                  </ProtectedRoute>
                } />
                <Route path="/admin/social" element={
                  <ProtectedRoute>
                    <AdminDashboard>
                      <CommunityManagement />
                    </AdminDashboard>
                  </ProtectedRoute>
                } />
                <Route path="/admin/partners" element={
                  <ProtectedRoute>
                    <AdminDashboard>
                      <PartnersManagement />
                    </AdminDashboard>
                  </ProtectedRoute>
                } />
                <Route path="/admin/founders" element={
                  <ProtectedRoute>
                    <AdminDashboard>
                      <FoundersManagement />
                    </AdminDashboard>
                  </ProtectedRoute>
                } />
                <Route path="/admin/tokenomics" element={
                  <ProtectedRoute>
                    <AdminDashboard>
                      <TokenomicsManagement />
                    </AdminDashboard>
                  </ProtectedRoute>
                } />
                <Route path="/admin/roadmap" element={
                  <ProtectedRoute>
                    <AdminDashboard>
                      <RoadmapManagement />
                    </AdminDashboard>
                  </ProtectedRoute>
                } />
                <Route path="/admin/settings" element={
                  <ProtectedRoute>
                    <AdminDashboard>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
                        {/* Settings components will be added here */}
                      </div>
                    </AdminDashboard>
                  </ProtectedRoute>
                } />
                <Route path="/admin/*" element={<Navigate to="/admin/content" replace />} />
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