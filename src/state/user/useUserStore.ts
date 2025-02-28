import { create } from "zustand";
import { UserDto } from "../../domain/user/interface/dtos/UserDto";

interface UserStore{
    user:UserDto | null
    login: (userData: UserDto)=> void
    logOut: ()=> void
}
export const useUserStore = create<UserStore>((set)=>({
    user: null,
    login: (userData)=> set(()=>({user: userData})),
    logOut: ()=>set(()=>({user: null}))
}))