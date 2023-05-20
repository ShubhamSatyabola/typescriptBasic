import { Router } from "express";
import {Todo} from "../models/todo"
let todos: Todo[] = []
const router = Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newtodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todos.push(newtodo)
    res.status(201).json({message:'added todo'})
})
router.put('/todo/:id',(req,res,next)=>{
    const id = req.params.id
    const index = todos.findIndex((element)=>element.id===id)
    if(index>=0){
        todos[index]={id:todos[index].id,text:req.body.text}
        return res.status(200).json({message:"updated", todos})
    }
    res.status(400).json({message:'could not find the todo'})
})

router.delete('/todo/:id',(req,res)=>{
    const id = req.params.id;
    todos = todos.filter(element=>element.id!== id)
    res.status(200).json({message:'deleted'})    
})



export default router