import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from "../assets/logo.png";

console.log("LOGIN FILE LOADED ✅");

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // ⚠️ ASEGÚRATE QUE ESTA FUNCIÓN APAREZCA SOLO UNA VEZ
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', email, password);
    alert(`Intentando login con: ${email}`);
    // Aquí después redirigirás al dashboard
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>
          <img src={logo} alt="GestuEdu logo" className="logo" />
          GestuEdu
        </h1>
        <h2>Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@ejemplo.com"
              required
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Ingresar
          </button>
        </form>

        <div className="register-link">
          <p>
            ¿No tienes cuenta?{' '}
            <button onClick={handleRegisterRedirect} className="link-button">
              Regístrate aquí
            </button>
          </p>
        </div>

        <p className="footer-text">
          Sistema de Gestión Escolar - GestuEdu 2025
        </p>
      </div>
    </div>
  );
}

console.log("EXPORT DEFAULT Login:", Login);
export default Login;