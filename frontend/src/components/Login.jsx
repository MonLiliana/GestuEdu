import { useState } from 'react';
import './Login.css';
console.log("LOGIN FILE LOADED ✅");

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', email, password);
    alert(`Intentando login con: ${email}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>🎓 GestuEdu</h1>
        <h2>Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Correo Electrónico</label>
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

        <p className="footer-text">
          Sistema de Gestión Escolar - GestuEdu 2025
        </p>
      </div>
    </div>
  );
}
console.log("EXPORT DEFAULT Login:", Login);
export default Login;