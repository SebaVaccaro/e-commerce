import { Link } from "react-router-dom";
import "./login-container.css";
import { useState } from "react";
import { useLogin } from "../../../../hooks/user/useLogin";
import { useUserStore } from "../../../../state/user/useUserStore";

type State = {
  email: string;
  password: string;
};

export const LoginContainer = () => {
  const { setDataLogin, error } = useLogin();
  const [state, setState] = useState<State>({ email: "", password: "" });
  const { user } = useUserStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.email && state.password) {
      setDataLogin({ email: state.email, password: state.password });
    }
  };

  return user ? (
    <h1>¡Bienvenido, {user.username}!</h1>
  ) : (
    <form className="login-container" onSubmit={submit}>
      <span className="login-span">LOGIN</span>
      <div className="email-login-container">
        <span className="email-span">
          Dirección de correo electrónico<span>*</span>
        </span>
        <input
          className="email-input"
          type="text"
          name="email"
          placeholder="Ingresa tu E-mail"
          value={state.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="password-login-container">
        <span className="password-span">
          Contraseña<span>*</span>
        </span>
        <input
          className="password-input"
          type="password"
          name="password"
          placeholder="Ingresa tu Contraseña"
          value={state.password}
          onChange={handleInputChange}
        />
      </div>
      <button className="loggin-button">ACCEDER</button>
      {error && <span className="span-error-login-container">{error}</span>}
      <div className="register-option-login-container">
        <span className="register-option-span1">¿No tenés cuenta?</span>
        <Link to="/register">
          <span className="register-option-span2">Creala aquí</span>
        </Link>
      </div>
    </form>
  );
};
