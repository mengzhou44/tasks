
export interface Task {
    id: string
    name: string
    createdBy: string
    createdOn: Date
}



export interface AddTaskInput {

    name: string
    createdBy: string

}
