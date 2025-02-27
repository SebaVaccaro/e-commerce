import { useEffect, useState } from "react"
import { UserService } from "../../services/application/user/UserService"

export const useChangePassword = () => {
    const userServices = new UserService()
    const [data, setData] = useState<{password:string, _id:string} | null>(null)
    const [responsePassword, setResponsePassword] = useState<string | null>(null)

    useEffect(()=>{
        if(!data)return

        const changePassword = async () =>{
            console.log(data)
            const res = await userServices.changePassword(data._id, data.password)
            console.log(res)
            if(!res)return setResponsePassword("error intente nuevamente")
            setResponsePassword("se actualizo la constrasenia correctamente")
        }
        changePassword()        
    },[data])

    return {responsePassword, setData}
}