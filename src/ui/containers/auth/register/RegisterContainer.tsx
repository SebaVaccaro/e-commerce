import { Link } from "react-router-dom"
import "./register-container.css"
import { useState } from "react"
import { useRegister } from "../../../../hooks/user/useRegister";
export const RegisterContainer = () => {
  const {setDataRegister, error, registerStatus} = useRegister()  
  const [formData, setFormData] = useState({
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const {email, username, password} = formData
      setDataRegister({email, username, password})
    };
  
    return (
      <>
        {registerStatus ? (
          <div className="register-success-container">
            <span className="register-success-message">
              ¡Registro exitoso! 
            </span>
            <Link to="/login" className="login-link">
              <span className="login-option-span2">Inicia sesión aquí</span>
            </Link>
          </div>
        ) : (
          <form className="register-container" onSubmit={handleSubmit}>
            <span className="register-span">REGISTRO</span>
            
            <div className="email-register-container">
              <span className="email-span">
                Correo electrónico<span>*</span>
              </span>
              <input
                className="email-input"
                type="text"
                placeholder="Ingresa tu E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="username-register-container">
              <span className="username-span">
                Nombre de usuario<span>*</span>
              </span>
              <input
                className="username-input"
                type="text"
                placeholder="Ingresa nombre de usuario"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="password-register-container">
              <span className="password-span">
                Contraseña<span>*</span>
              </span>
              <input
                className="password-input"
                type="password"
                placeholder="Ingresa contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="repeat-password-register-container">
              <span className="repeat-password-span">
                Confirma contraseña<span>*</span>
              </span>
              <input
                className="password-input"
                type="password"
                placeholder="Confirma contraseña"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <button className="register-button" type="submit">
              REGISTRAR
            </button>
            
            {error && (
              <span className="span-error-register-container">{error}</span>
            )}
            
            <div className="login-option-register-container">
              <span className="login-option-span1">¿Ya tienes cuenta?</span>
              <Link to="/login" className="login-link">
                <span className="login-option-span2">Inicia sesión aquí</span>
              </Link>
            </div>
          </form>
        )}
      </>
    );
    
  };