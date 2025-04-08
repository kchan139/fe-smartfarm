import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;