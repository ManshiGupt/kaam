export const funtifetch=async()=>{
    try {
        const res= await fetch("https://dummyjson.com/products");
        const json= await res.json();
        console.log("lo",json)
        return json.products;
        
    } catch (error) {
        console.log("not able to fetch")
        return null;
    }
}