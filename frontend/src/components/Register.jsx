import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../assets/logo.png';

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    tipoUsuario: 'padre'
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // ✅ TODAS LAS FUNCIONES ANTES DEL RETURN

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Datos de registro:', formData);
      alert('Registro exitoso! (Por ahora solo frontend)');
      
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  // ✅ RETURN AL FINAL
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>
           <img src={logo} alt="GestuEdu logo" className="logo" />
          GestuEdu</h1>
        <h2>Crear Cuenta</h2>
        
        <form onSubmit={handleSubmit}>
          
          {/* Nombre */}
          <div className="input-group">
            <label>Nombre *</label>
            <input 
              type="text" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              className={errors.nombre ? 'error' : ''}
            />
            {errors.nombre && <span className="error-text">{errors.nombre}</span>}
          </div>

          {/* Apellido */}
          <div className="input-group">
            <label>Apellido *</label>
            <input 
              type="text" 
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Ingresa tu apellido"
              className={errors.apellido ? 'error' : ''}
            />
            {errors.apellido && <span className="error-text">{errors.apellido}</span>}
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Correo Electrónico *</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="usuario@ejemplo.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Tipo de Usuario */}
          <div className="input-group">
            <label>Tipo de Usuario *</label>
            <select 
              name="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleChange}
            >
              <option value="padre">Padre/Acudiente</option>
              <option value="docente">Docente</option>
              <option value="estudiante">Estudiante</option>
            </select>
          </div>

          {/* Contraseña */}
          <div className="input-group">
            <label>Contraseña *</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mínimo 6 caracteres"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {/* Confirmar Contraseña */}
          <div className="input-group">
            <label>Confirmar Contraseña *</label>
            <input 
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repite tu contraseña"
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>

          {/* Botón */}
          <button type="submit" className="btn-register">
            Registrarse
          </button>
        </form>

        {/* Enlace a Login */}
        <div className="login-link">
          <p>
            ¿Ya tienes cuenta?{' '}
            <button onClick={handleLoginRedirect} className="link-button">
              Inicia Sesión
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

export default Register;