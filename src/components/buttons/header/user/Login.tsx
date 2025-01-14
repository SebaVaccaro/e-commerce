import userIcon from "../../../../assets/user-profile.svg"
import "./login.css"
export const Login = () =>{
    return(
        <button className="login-button">
            <img className="login-img" src={userIcon} alt="user-icon" />
            <span>INGRESAR</span>
        </button>
    )
}