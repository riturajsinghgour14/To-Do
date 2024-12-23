import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodo } from '../features/todo/todoSlice';


const Form = () => {
  const {edit} = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    edit.isEdit ? dispatch(updateTodo({_id : edit.todo._id , title , description})): dispatch(createTodo({title,description}));
    setTitle("")
    setDescription("")
}

useEffect(() => {
   setTitle(edit.todo.title)
   setDescription(edit.todo.description)
},[edit])

  
  return (
    <div className='card p-2'>
        <h1 className='text-center display-5'>My Todo</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" 
           placeholder='Enter Title'
           className='form-control my-2'
           onChange={(e) => setTitle(e.target.value)}
           value={title}
          required
        />
         <input type="text" 
           placeholder='Enter Decription'
           className='form-control my-2'
           onChange={(e) => setDescription(e.target.value)}
           value={description}
          required
        />
        <button type='submit' className='btn btn-success w-100 rounded-0 my-2'>Save</button>
      </form>
    </div>
  )
}

export default Form
