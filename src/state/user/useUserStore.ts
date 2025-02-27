import { create } from "zustand";
import { UserInterface } from "../../domain/user/interface/UserInterface";

interface UserStore{
    user:UserInterface | null
    login: (userData: UserInterface)=> void
    logOut: ()=> void
}
export const useUserStore = create<UserStore>((set)=>({
    user: null,
    login: (userData)=> set(()=>({user: userData})),
    logOut: ()=>set(()=>({user: null}))
}))