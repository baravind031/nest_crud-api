import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModuler }  from './users/users.module';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';


@Module({
  imports: [UsersModuler],
  // controllers: [AppController],
  // providers: [AppService],
  controllers:[UserController],
  providers:[UserService],
})
export class AppModule {}
