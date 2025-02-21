import { createContext, useContext, useState } from "react";



export const FormContext= createContext();

export const FormContextProvider=({children})=>{
    const[formData,setFormData]= useState("");

    // const increment = () => setFormData((prev) => prev + 1);

    return(
        <FormContext.Provider value={{formData,setFormData}}>
            {children}
        </FormContext.Provider>

    )
}


export const useFormContext= ()=> useContext(FormContext);