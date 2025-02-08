const {EntitySchema, PrimaryGeneratedColumn, Column}=require( "typeorm")

const Task=new EntitySchema({
    name:"Task",
    columns:{
        id:{
            type:"int",
            primary:true,
            generated:"increment"
        },
        title:{
            type:"varchar",
            length:255
        },
        description:{
            type:"varchar",
            length:255
        },
        completed:{
            type:"boolean",
            default:false
        },
    }
})

module.exports=Task