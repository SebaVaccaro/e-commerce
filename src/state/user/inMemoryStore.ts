import { create } from "zustand";
import { UserInterface } from "../../domain/user/entity/UserInterface";


interface InMemoryStoreState {
  users: UserInterface[];
  addUser: (user: UserInterface) => void;
  getUserById: (id: string) => UserInterface | undefined;
  getUserByEmail: (email: string) => UserInterface | undefined;
  getUserByUsername: (username: string) => UserInterface | undefined;
  updateUser: (updatedUser: UserInterface) => void;
  deleteUser: (id: string) => void;
}

export const useInMemoryStore = create<InMemoryStoreState>((set, get) => ({
  users: [],


  addUser: (user: UserInterface) => {
    const existingUser = get().users.find((u) => u.id === user.id);
    if (existingUser) {
      throw new Error(`User with ID ${user.id} already exists.`);
    }
    set((state) => ({
      users: [...state.users, user],
    }));
  },


  getUserById: (id: string) => {
    return get().users.find((user) => user.id === id);
  },
  getUserByEmail: (email: string) => {
    return get().users.find((user) => user.email === email);
  },
  getUserByUsername: (username: string)=>{
    return get().users.find((user)=> user.username === username)
  },


  updateUser: (updatedUser: UserInterface) => {
    const existingUser = get().users.find((u) => u.id === updatedUser.id);
    if (!existingUser) {
      throw new Error(`User with ID ${updatedUser.id} does not exist.`);
    }
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    }));
  },


  deleteUser: (id: string) => {
    const existingUser = get().users.find((u) => u.id === id);
    if (!existingUser) {
      throw new Error(`User with ID ${id} does not exist.`);
    }
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    }));
  },
}));
