import { UserInterface } from "../../../../domain/user/entity/UserInterface";
import { useInMemoryStore } from "../../../../state/user/inMemoryStore";

export class UserApi {
  private inMemoryStore = useInMemoryStore.getState();
  async getUserById(id: string): Promise<UserInterface | string> {
    const user = this.inMemoryStore.getUserById(id);
    if (!user) return "No se encontró usuario";
    return user;
  }

  async getUserByUsername(username: string): Promise<UserInterface | string> {
    const user = this.inMemoryStore.getUserByUsername(username);
    if (!user) return "No se encontró usuario";
    return user;
  }

  async saveUser(user: UserInterface): Promise<UserInterface> {
    try {
      this.inMemoryStore.addUser(user);
      return user;
    } catch (error: any) {
      throw new Error(error.message || "Error al guardar el usuario");
    }
  }

  async getUserByEmail(email: string): Promise<UserInterface | string> {
    const user = this.inMemoryStore.getUserByEmail(email);
    if (!user) return "Usuario no registrado";
    return user;
  }

  async updateUser(user: UserInterface): Promise<string> {
    try {
      this.inMemoryStore.updateUser(user);
      return "Usuario actualizado";
    } catch (error: any) {
      throw new Error(error.message || "Error al actualizar el usuario");
    }
  }

  async deleteUser(id: string): Promise<string> {
    try {
      this.inMemoryStore.deleteUser(id);
      return "Usuario eliminado";
    } catch (error: any) {
      throw new Error(error.message || "Error al eliminar el usuario");
    }
  }
}
