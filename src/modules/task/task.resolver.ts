import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Task, AddTaskInput } from './task.dto'
import taskService from './task.service'
 
@Resolver( () => Task)
export class TaskResolver {

  @Query( () => [Task])
  async tasks(): Promise<Task[]> {
    return taskService.getTasks()
  }

  @Mutation(() => String)
  async addTask(@Arg('input') input: AddTaskInput): Promise<string> {
    return await taskService.addTask(input)
  }
}