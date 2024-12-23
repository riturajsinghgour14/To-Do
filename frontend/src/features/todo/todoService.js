import axios from "axios";

export const fetchTodos = async() => {
    const response = await axios.get("https://to-do-7682.onrender.com/api/todo/");
    return response.data;
};


export const addTodo = async(FormData) => {
    const response = await axios.post("https://to-do-7682.onrender.com/api/todo/",FormData)
   return response.data;
};

export const deleteTodo = async(id) => {
    const response = await axios.delete("https://to-do-7682.onrender.com/api/todo/" + id);
    // console.log(response.data)
    return response.data;
}

export const update = async(updatedTodo) => {
    const response = await axios.put("https://to-do-7682.onrender.com/api/todo/"+ updatedTodo._id , updatedTodo);
    // console.log(response.data)
    return response.data
}