import { Link } from "react-router-dom"
import "./register-container.css"
export const RegisterContainer = () => {
    return (
        <div className="register-container">
            <span className="register-span">REGISTRO</span>
            
            <div className="email-register-container">
                <span className="email-span">Correo electronico<span>*</span></span>
                <input className="email-input" type="text" placeholder="Ingresa tu E-mail" />
            </div>

            <div className="username-register-container">
                <span className="username-span">Nombre de usuario<span>*</span></span>
                <input className="username-input" type="text" placeholder="Ingresa nombre de usuario" />
            </div>
            
            <div className="password-register-container">
                <span className="password-span">Contraseña<span>*</span></span>
                <input className="password-input" type="password" placeholder="Ingresa contraseña" />
            </div>
            
            <div className="repeat-password-register-container">
                <span className="repeat-password-span">Confirma contraseña<span>*</span></span>
                <input className="password-input" type="password" placeholder="confirma contraseña" />
            </div>
            <button className="register-button">REGISTRAR</button>
            <div className="login-option-register-container">
                <span className="login-option-span1">¿Ya tenés cuenta?</span>
                <Link to='/login'>
                    <span className="login-option-span2">Logeate aqui</span>
                </Link>
            </div>
        </div>
    )
}