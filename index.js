const app = require('express');
const { createTodo, updateTodo } = require('./types');



// //{
//   title : String
//   description:string 
// //}

app.use(express.json())
//adding todo in app
app.post('addTodo',(req,res)=>{

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            message:"you have sent wrong request body"
        })
    }
    else{
        //put it in mongo db
    }

})

app.put('updTodo',(req,res)=>{

    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(updateTodo)

    if(!parsedPayload.success){
        res.status(411).json({
            message:"you have sent wrong id"
        })

        return;
    }
    else{
        //put it in mongo db
    }



})

app.get('getAllTodo',(req,res)=>{

})
