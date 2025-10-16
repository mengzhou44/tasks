import { User } from './user.graphql'

class UserService {
  private users: User[]  = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ]
  
 

  // Get all users
  getUsers(): User[] {
    return this.users
  }

  // Get a single user by ID
  getUserById(id: string): User | undefined {
    return this.users.find(u => u.id === id)
  }

  // Add a new user
  addUser(user: User): User {
    this.users.push(user)
    return user
  }
}


export default  new UserService()