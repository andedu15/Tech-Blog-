const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username: "andres",
        password: "andrespassword"
    },
    {
        username: "eduardo",
        password: "eduardopassword"
    }, 
    {
        username: "mike",
        password: "mikepassword"
    },

]

const blogs = [
    {
        title: "My first post",
        content: "hello",
        userId: 1
    },
    {
        title: "My second post",
        content: "bye",
        userId: 1
    },
    {
        title: "Mike's first post",
        content: "hi i'm Mike",
        userId: 2
    },
    {
        title: "Eduardo's first post",
        content: "hi i'm Eduardo",
        userId: 3
    },
]

const comments = [
    {
        body: "great post!",
        blogId: 1,
        userId: 1
    },
    {
        body: "i agree!",
        blogId: 3,
        userId: 2
    },
    {
        body: "well said!",
        blogId: 4,
        userId: 1
    },
    {
        body: "happy monday!",
        blogId: 2,
        userId: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()