import axios from "axios"

export const getTheTodo=async()=>{
    try {
        const resp= await axios.get("https://dummyjson.com/todos");
        console.log("data",resp.data);
        return resp.data;
        
    } catch (error) {
        console.log("error",error)
    }
}

export const postTheTodo=async(data)=>{
    try {
        const resp= await axios.get('https://dummyjson.com/todos/add',data);
        console.log("data",resp);
        return resp;
        
    } catch (error) {
        console.log("error",error)
    }
}