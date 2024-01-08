const express = require('express');
const app = express()
const { createTodo, updateTodo } = require('./types');
const {todo} = require('./db/db.js')



// //{
//   title : String
//   description:string 
// //}

app.use(express.json())
//adding todo in app
app.post('/addTodo',async(req,res)=>{

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            message:"you have sent wrong request body"
        })
        return;
    }

    try{

    await todo.create({
        title: createPayload.title,
        description:createPayload.description
    })

    res.status(200).json({
        message: "todo created succesfully"
    })
}
catch(error){
    console.error(error);
    res.status(500).json({
        message: "internal server error"
})
}

})

app.put('/updTodo',async(req,res)=>{



    try {

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({
            message:"you have sent wrong id"
        })

        return;
    }



    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg: "to do created successfully"
    })

}

catch(error){
    console.error(error)
    res.json({
        msg:"internal server error"
    })
}
   
})

app.get('/getAllTodo',async(req,res)=>{

    try{

    const todoData = await todo.find()

    res.status(200).json(todoData)

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message: "internal server error"
    })
    }

})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});