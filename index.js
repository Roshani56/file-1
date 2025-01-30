//import experss module
const express=require('express')
const app=express()

app.use(express.json())

let users=[
    {id:1},
    {id:2}

]
//get all users
app.get('/users',(req,res)=>{
    res.json(users)
})

//POST
pp.post('/users',(req,res)=>{

    const newUser={id: users.length+1,...req.body }
    users.push(newUser);
    res.status(201).json(newUser);

});

//UPDATE--PUT()
app.put('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if(!user) return res.status(404).json({messege:"users not found"})
    user.name=req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(users);
    
})
//DELETE 
app.delete('/useres/:id',(req,res)=>{
    users=users.filter(user=>user.id ==parseInt(res.params.id))
    res.json({messege:'User Deleted'})
     
    
})
app.listen(8000,()=>console.log("server is running in the port 8000"))


