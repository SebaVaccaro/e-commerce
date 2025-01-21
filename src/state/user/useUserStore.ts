import { create } from "zustand";
type User = {
    username: string,
    email: string,
    password: string,
    id: string
}
interface UserStore{
    user:User | null
    login: (userData: User)=> void
    logOut: ()=> void
}
export const useUserStore = create<UserStore>((set)=>({
    user: null,
    login: (userData)=> set(()=>({user: userData})),
    logOut: ()=>set(()=>({user: null}))
}))