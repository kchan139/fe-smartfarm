import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Login from './pages/Login/Login';
import { isAuthenticated } from './utils/auth';

// Protected route component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;