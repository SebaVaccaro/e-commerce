import { useEffect, useState } from "react"
import { UserService } from "../../services/application/user/UserService"
import { useUserStore } from "../../state/user/useUserStore";


export const useLogin = () => {
    const userServices = new UserService()
    const { login } = useUserStore()

    const [dataLogin, setDataLogin] = useState<{ email: string, password: string } | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loginFunction = async () => {
            if (dataLogin?.email && dataLogin.password) {
                const res = await userServices.login(dataLogin?.email, dataLogin?.password)
                if(!res.success)return setError(res.message)
                if(res.data)login(res.data)
            }
        }
        if(dataLogin){
            loginFunction()
        }
    }, [dataLogin])
    return { setDataLogin, error }
}