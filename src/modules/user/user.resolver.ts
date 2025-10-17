import { Resolver, Query } from 'type-graphql'

import userService from './user.service'
import { User } from './user.dto'

@Resolver(() => User)
export class UserResolver {

  @Query(() => [User])
  async  users(): Promise<User[]> {
    return userService.getUsers()
  }

}