import { useEffect, useState } from "react"
import { UserService } from "../../services/application/user/UserService"

type UserRegisterType = {
    username: string;
    email: string;
    password: string;
};

export const useRegister = () => {
    const [dataRegister, setDataRegister] = useState<UserRegisterType | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [registerStatus , setRegisterStatus] = useState<boolean>(false)
    const userServices = new UserService()

    useEffect(() => {
        const registerFunction = async (data:{
            username: string,
            email: string,
            password: string,
        })=> {
            const res = await userServices.register(data.username, data.password, data.email)
            if(!res.success)setError(res.error)
            console.log(res)
            setRegisterStatus(res.success)
}
if (dataRegister) {
    registerFunction(dataRegister)
}
    }, [dataRegister])
return { setDataRegister, error, registerStatus}
}