import { Injectable } from "@nestjs/common";
import { User } from "./users.model";

@Injectable()
export class UserService {
 // getUser(userId: string) 
     // {
     //     throw new Error('Method implemented.');
     // }

  private users: User[] = [];

  insertUser(name: string, age: number, surname: string, email: string) {
    const id = uuidv4();
    const newUser = new User(id, name, age, surname, email);
    this.users.push(newUser);
    return id;
  }

  getUsers() {
    return [...this.users];
  }

  getUser(id: string) {
    const [targetUser] = this.getUserById(id);
    return targetUser;
  }

  updateUser(Id: string, name: string, age: number, surname: string, email: string) {
    const [targetUser, index] = this.getUserById(Id);
    const updatedUser = { ...targetUser, name, age, surname, email };
    const newUser = new User(Id, updatedUser.name, updatedUser.age, updatedUser.surname, updatedUser.email);
    this.users[index] = newUser;
    return newUser;
  }

  deleteUser(id: string) {
    const [, index] = this.getUserById(id);
    this.users.splice(index, 1);
  }

  private getUserById(id: string): [User, number] {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      return [this.users[index], index];
    }
    return [null, -1];
  }

}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
