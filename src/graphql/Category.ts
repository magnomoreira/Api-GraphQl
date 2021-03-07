import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Category {
    @Field()
    name: String ;
    @Field()
    decription: String;
    @Field()
    _id: String ;

}