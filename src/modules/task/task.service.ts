import { AddTaskInput, Task } from './task.model'

class TaskService {
    private tasks: Task[] = [
        { id: '1', name: 'Go Shopping', createdBy: 'Meng', createdOn: new Date() },
        { id: '2', name: 'Read Book', createdBy: 'Meng', createdOn: new Date() },
    ]

    getTasks(): Task[] {
        return this.tasks
    }

    async addTask(input: AddTaskInput): Promise<String> {
        const newTask: Task = {
            id: '3',
            name: input.name,
            createdBy: input.createdBy,
            createdOn: new Date()
        }
        this.tasks.push(newTask)
        return "3"
    }
}


export default new TaskService()