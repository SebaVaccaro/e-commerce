import { useEffect, useState } from "react"
import { UserService } from "../../services/application/user/UserService"
import { useUserStore } from "../../state/user/useUserStore";


export const useLogin = () =>{
    const userServices = new UserService()
    const {login} = useUserStore()
    
    const [dataLogin, setDataLogin] = useState<{username:string, password:string} | null>(null)
    const [error, setError] = useState<string | null>(null)
    
    useEffect(()=>{
        const loginFunction = async (username:string, password:string)=>{
            const res = await userServices.login(username, password)
            if(!res.success)return setError(res.error);
            return login(res.data)
        }
        if(dataLogin?.password && dataLogin.password){
            loginFunction(dataLogin.username, dataLogin.password)
        }
    },[dataLogin])
    return{setDataLogin, error}
}