const express = require("express")
const { connection } = require("./db")
const {userRouter} =require("./routes/user.routes")
const {postRouter} = require("./routes/post.routes")
const {auth} = require("./middleware/auth.middleware")



const app = express()
app.use(express.json())
app.use("/users",userRouter)
app.use(auth)
app.use("/posts",postRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log("Cannot connect to DB");
        console.log(err)
    }
    console.log("All ok dude")
})