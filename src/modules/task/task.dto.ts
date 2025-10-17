
import { Field, InputType, ObjectType } from 'type-graphql'


@ObjectType()
export class Task {
    @Field(() => String)
    id!: string

    @Field(() => String)
    name!: string

    @Field(() => String)
    createdBy!: string

    @Field(() => Date)
    createdOn!: Date

}

@InputType()
export class AddTaskInput {

    @Field(() => String)
    name!: string

    @Field(() => String)
    createdBy!: string
}






