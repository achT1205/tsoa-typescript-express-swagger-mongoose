
import { User, IUser } from "./user";
import { UserDto } from "./userDto";

export type UserCreationParams = Pick<IUser, "email" | "name">;

export type UserUpdateParams = Pick<IUser, "email" | "name">;

export type UserCreationParamsDto = Pick<UserDto, "id" | "email" | "name">;

export class UsersService {

  public async getAll(): Promise<UserDto[]> {
    try {
      let items: any = await User.find({})
      items = items.map((item: { _id: string; name: string; email: string }) => { return { id: item._id, email: item.email, name: item.name } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async createUser(userCreationParams: UserCreationParams): Promise<boolean> {

    const item = new User({ name: userCreationParams.name, email: userCreationParams.email })
    await item.save()
    return true;
  }

  public async update(id: string, userUpdateParams: UserUpdateParams): Promise<void> {
    await User.findByIdAndUpdate({ _id: id }, userUpdateParams)
  }

  public async delete(id: string): Promise<void> {
    await User.findByIdAndRemove(id)
  }

  public async get(id: string): Promise<any> {
    return await User.findById(id)
  }

}