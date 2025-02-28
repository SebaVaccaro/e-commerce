import { useEffect, useState } from "react"
import { UserService } from "../../services/application/user/UserService"

export const useChangePassword = () => {
    const userServices = new UserService()
    const [data, setData] = useState<{password:string, _id:string} | null>(null)
    const [response, setResponse] = useState<string | null>(null)

    useEffect(()=>{
        if(!data)return

        const changePassword = async () =>{
            const res = await userServices.changePassword(data._id, data.password)
            setResponse(res.message)
        }
        changePassword()        
    },[data])

    return {response, setData}
}