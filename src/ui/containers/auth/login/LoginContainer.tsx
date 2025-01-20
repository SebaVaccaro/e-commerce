import { Link } from "react-router-dom"
import "./login-container.css"
export const LoginContainer = () => {
    return (
        <div className="login-container">
            <span className="login-span">LOGIN</span>
            <div className="username-login-container">
                <span className="username-span">Dirección de correo electrónico<span>*</span></span>
                <input className="username-input" type="text" placeholder="Ingresa tu E-mail" />
            </div>
            <div className="password-login-container">
                <span className="password-span">Contraseña<span>*</span></span>
                <input className="password-input" type="password" placeholder="Ingresa tu Contraseña" />
            </div>
            <button className="loggin-button">ACCEDER</button>
            <div className="register-option-login-container">
                <span className="register-option-span1">¿No tenés cuenta?</span>
                <Link to='/register'>
                    <span className="register-option-span2">Creala aqui</span>
                </Link>
            </div>
        </div>
    )
}