import { create } from "zustand";

type UserType = {
  id: string;
  username: string;
  email: string;
  password: string;
};


interface InMemoryStoreState {
  users: UserType[];
  addUser: (user: UserType) => void;
  getUserById: (id: string) => UserType | undefined;
  getUserByEmail: (email: string) => UserType | undefined;
  getUserByUsername: (username: string) => UserType | undefined;
  updateUser: (updatedUser: UserType) => void;
  deleteUser: (id: string) => void;
}

export const useInMemoryStore = create<InMemoryStoreState>((set, get) => ({
  users: [],


  addUser: (user: UserType) => {
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


  updateUser: (updatedUser: UserType) => {
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
