import { Injectable } from "@nestjs/common";
import { User } from "./users.model";

@Injectable()

export class UserService{
    getUser(userId: string) {
        throw new Error('Method not implemented.');
    }
    // updateUser(userId: string, name: string, age: number, surname: string, email: string) {
    //     throw new Error('Method not implemented.');
    // }
    // getUser() {
    //     throw new Error('Method not implemented.');
    // }
    // getUsers() {
    //     throw new Error('Method not implemented.');
    // }
    private users:User[]=[];

    insersUser(name:string, age:number, surname:string, email:string){
        const id = uuidv4();
        const newUser = new User('id',name, age, surname,email);
        this.users.push(newUser);
        return 'id';
    }

    getUsers(){
        return[...this.users];
    }

    getUSer(id:string){
        return this.getUserById(id)[0];
    }


    updateUser(
        Id: string, 
        name : string, 
        age : number, 
        surname: string,
        email: string,
    ){
        const [targetUser,index] = this.getUserById(Id);
        const nup ={ ...targetUser,name, age, surname,email
        };
        const newUser = new User(Id , nup.name,nup.age,nup.surname,nup.email);
        this.users[index]=newUser;
        return newUser;

    }

    deleteUser(id: string){
        const [ ,index]= this.getUserById(id);
        this.users.splice(index, 1);
    }



    private getUserById(id:string):[User, number]{
      const index = this.users.findIndex((u)=>u.id == id);
      return [this.users[index],index];
    }

}

function uuidv4() {
    throw new Error("Function not implemented.");
} 