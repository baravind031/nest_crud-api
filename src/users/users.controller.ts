import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
// @Get()
//      getUsers(){
//          return 'Hello Aravind';
    
//      }
  @Post()
  insertUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('surname') surname: string,
    @Body('email') email: string,


    
  ) {
    const userId = this.userService.insertUser(name, age, surname, email);
    return {
      id: userId,
    };
  }

  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('surname') surname: string,
    @Body('email') email: string,
  ) {
    return this.userService.updateUser(userId, name, age, surname, email);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    this.userService.deleteUser(userId);
    return `User ID ${userId} successfully deleted.`;
  }
}
