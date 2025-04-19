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
        const resp= await axios.post('https://dummyjson.com/todos/add',data);
        console.log("datbdhda",resp.data);
        const r= resp.data
        return r;
        
    } catch (error) {
        console.log("error",error)
    }
}

export const deleteTheTodo=async(id)=>{
    try {
        const resp= await axios.delete(`https://dummyjson.com/todos/${id}`);
        console.log("datbdhda",resp.data);
        const r= resp.data
        return r;
        
    } catch (error) {
        console.log("error",error)
    }
}

export const editTheTodo=async(id,data)=>{
    try {
        const resp= await axios.put(`https://dummyjson.com/todos/${id}`,data);
        console.log("editTheTodo",resp.data);
        const r= resp.data
        return r;
        
    } catch (error) {
        console.log("error",error)
    }
}