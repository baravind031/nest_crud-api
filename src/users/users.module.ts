import { UserService } from "./users.service";
import { UserController } from "./users.controller";
import { Module } from "@nestjs/common";


@Module({
    imports : [UsersModuler],
    controllers:[UserController],
    providers:[UserService],
})
export class UsersModuler {}
