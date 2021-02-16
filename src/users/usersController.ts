import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route
} from "tsoa";

import { UserDto } from "./userDto";
import { UsersService, UserCreationParams } from "./usersService";

@Route("users")
export class UsersController extends Controller {

  @Get()
  public async getAllUsers(): Promise<UserDto[]> {
    return new UsersService().getAll();
  }


  @Get("{id}")
  public async getUser(
    @Path() id: string
  ): Promise<UserDto> {
    return new UsersService().get(id);
  }

  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().createUser(requestBody);
    return;
  }

  @Put("{id}")
  public async updateUser(
    @Path() id: string,
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().update(id, requestBody);
    return;
  }

  @Delete("{id}")
  public async DeleteUser(
    @Path() id: string
  ): Promise<void> {
    return new UsersService().delete(id);
  }

}