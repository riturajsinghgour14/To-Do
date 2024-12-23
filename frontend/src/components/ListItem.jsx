import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit, remove, removeTodo } from '../features/todo/todoSlice';

const ListItem = ({todo}) => {
  const {isSuccess} = useSelector((state) => state.todos)
   const dispatch = useDispatch();
  
   const handleDelete = (id) => {
      dispatch(removeTodo(id));
      if(isSuccess){
         dispatch(remove(id))
      }
   }
   const handleEdit = (todo) => {
      dispatch(edit(todo))
   }

  return (
    <li className='list-group-item rounded-0'>
   <h1 className='display-5'>{todo?.title}</h1>
    <h1 className='display-6'>{todo?.description}</h1>
       <span className='float-end'>
             
             <button className='btn btn-sm btn-warning mx-1 rounded' onClick={() => handleEdit(todo)}>  
               Edit
            </button>
            <button className='btn btn-sm btn-danger mx-1 rounded'
             onClick={() => handleDelete(todo?._id)}
            >
               Delete
            </button>
       </span>
    </li>
  )
}

export default ListItem
