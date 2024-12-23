const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel")

// Add Todo
const createTodo = expressAsyncHandler(async(req,res) => {
    const {title,description} = req.body;

    if(!title|| !description){
        res.status(400)
        throw new Error("please Fill All Details")
    }
    const todo = await Todo.create({
        title:title,
        description:description,
    });

    if(!todo){
        res.status(404);
        throw new Error("Todo Cannot Be Created!!");
    }
    res.status(200).json(todo)

} );

// Get Todo
const getTodo = expressAsyncHandler(async(req,res) => {
   const todos = await Todo.find();
   if(!todos){
    res.status(404);
    throw new Error("Todo Not Found!!");
}
res.status(200).json(todos)

} );

// Update Todo
const updateTodo = expressAsyncHandler(async(req,res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,req.body, {new : true});

    if(!updatedTodo){
        res.status(404);
        throw new Error("Todo Not Update!!");
    }
    res.status(200).json(updatedTodo)
});

// Delete Todo
const removeTodo = expressAsyncHandler(async(req,res) => {

    const remove = await Todo.findByIdAndDelete(req.params.id);

    if(!remove){
        res.status(404);
        throw new Error("Todo Not Remove!!");
    }
    res.status(200).json({message: "task Deleted"})
});


module.exports = {createTodo,getTodo,updateTodo,removeTodo};