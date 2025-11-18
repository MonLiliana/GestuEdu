import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz redirige a login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Ruta de login */}
        <Route path="/login" element={<Login />} />
        
        {/* Ruta de registro */}
        <Route path="/register" element={<Register />} />
        
        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;