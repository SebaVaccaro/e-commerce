import { UserInterface } from "../../../../domain/user/entity/UserInterface";
import { useInMemoryStore } from "../../../../state/user/inMemoryStore";

export class UserApi {
  private inMemoryStore = useInMemoryStore.getState();
  
  async getUserById(id: string): Promise<UserInterface | false> {
    const res = this.inMemoryStore.getUserById(id);
    if(!res)return false
    return res
  }

  async getUserByUsername(username: string): Promise<UserInterface | false> {
    const res = this.inMemoryStore.getUserByUsername(username);
    if(!res)return false
    return res
  }

  async getUserByEmail(email: string): Promise<UserInterface | false> {
    const res = this.inMemoryStore.getUserByEmail(email);
    if(!res)return false
    return res
  }
  
  async saveUser(user: UserInterface): Promise<UserInterface> {
    this.inMemoryStore.addUser(user);
    return user
  }


  async updateUser(user: UserInterface): Promise<UserInterface> {
      this.inMemoryStore.updateUser(user);
      return user
  }

  async deleteUser(id: string): Promise<boolean> {
    try {
      this.inMemoryStore.deleteUser(id);
      return true
    }catch(err){
      console.log(err)
      return false
    }
  }
}
