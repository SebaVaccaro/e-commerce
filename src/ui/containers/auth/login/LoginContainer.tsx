import { Link } from "react-router-dom"
import "./login-container.css"
import { useState } from "react"
import { useLogin } from "../../../../hooks/user/useLogin";
type State = {
    username?: string;
    password?: string;
}
export const LoginContainer = () => {
    const {setDataLogin, error} = useLogin()
    const [state, setState] = useState<State | null>(null)
    
    const setUsername = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setState({...state, username: e.target.value})
    }
    const setPassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setState({...state, password: e.target.value})
    }

    const submit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(state?.username && state.password){
            setDataLogin({username: state.username, password: state.password})
        }
    }
    
    return (
        <form className="login-container" onSubmit={(e)=>submit(e)}>
            <span className="login-span">LOGIN</span>
            <div className="username-login-container">
                <span className="username-span">Dirección de correo electrónico<span>*</span></span>
                <input className="username-input" type="text" placeholder="Ingresa tu E-mail" onChange={(e)=>setUsername(e)}/>
            </div>
            <div className="password-login-container">
                <span className="password-span">Contraseña<span>*</span></span>
                <input className="password-input" type="password" placeholder="Ingresa tu Contraseña" onChange={(e)=>setPassword(e)}/>
            </div>
            <button className="loggin-button" >ACCEDER</button>
            { error && <span className="span-error-login-container">{error}</span>}
            <div className="register-option-login-container">
                <span className="register-option-span1">¿No tenés cuenta?</span>
                <Link to='/register'>
                    <span className="register-option-span2">Creala aqui</span>
                </Link>
            </div>
        </form>
    )
}