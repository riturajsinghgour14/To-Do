import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos, update } from "./todoService";

// const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const  todoSlice = createSlice({
    name: 'todo',
    initialState:{
        allTodos:[],
        isLoading: false,
        isError: false,
        isSuccess: false,
        edit:{ todo:{}, isEdit:false},
      },
      reducers:{
        remove: (state, action) => {
          return {
            ...state,
            allTodos: state.allTodos.filter((item) => item._id !== action.payload),
          
        };
      },
      edit: (state, action) => {
        return {
          ...state,
          edit: { todo: action.payload, isEdit: true },
        };
      },
    },
    extraReducers : (builder) =>{
    builder
    .addCase(getTodos.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allTodos = action.payload;
    })
    .addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })

    .addCase(createTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(createTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allTodos = [...state.allTodos,action.payload];
    })
    .addCase(createTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
    .addCase(removeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      // state.todos = action.payload;
    })
    .addCase(updateTodo.pending,(state,action)=> {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
  })
  .addCase(updateTodo.fulfilled,(state,action)=> {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allTodos = state.allTodos.map(item => item._id === action.payload._id ? action.payload : item)
      state.edit = {todo : {} , isEdit : false}
  })
  .addCase(updateTodo.rejected,(state,action)=> {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
  })
    },
      
});

export const {remove,edit} = todoSlice.actions;
export default todoSlice.reducer;

// Get Todos
export const getTodos = createAsyncThunk("FETCH/TODOS", async() =>{
    try {
      return await fetchTodos();
    } catch (error) {
      const message = error.response.data.err;
    return thunkAPI.rejectWithValue(message);
    }
  })

// Add Todo
export const createTodo = createAsyncThunk("ADD/TODOS", async(FormData) =>{
  try {
    return await addTodo(FormData);
  } catch (error) {
    const message = error.response.data.err;
    return thunkAPI.rejectWithValue(message);
  }
})

 // Delete Todo
export const removeTodo = createAsyncThunk("DELETE/TODOS", async(id) =>{
  try {
    return await deleteTodo(id);
  } catch (error) {
    const message = error.response.data.err;
    return thunkAPI.rejectWithValue(message);
  }
});

// UpdateTodo Todo
export const updateTodo = createAsyncThunk("UPDATE/TODOS", async(updatedTodo) =>{
  try {
    return await update(updatedTodo);
  } catch (error) {
    const message = error.response.data.err;
    return thunkAPI.rejectWithValue(message);
  }
});