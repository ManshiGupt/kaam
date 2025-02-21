import { useState, useEffect } from "react";

const useShowOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // window.addEventListener("offline", (event) => setIsOnline(true));
    window.addEventListener("offline", (event) => {
      setIsOnline(false);
    });
    window.addEventListener("online",(event)=>{
      setIsOnline(true);
    })
  }, []);

  return isOnline
    
  
};

export default useShowOnline;
