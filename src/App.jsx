// // import { useState } from "react";
// // import Rating from "./component/Rating";

// import ProgressBar from "./component/ProgressBar";
// import Qui from "./component/Qui";
// import Qui1 from "./component/Qui1";

// // function App() {

// //   return (

// //       <div>
// //         <h1>I am here</h1>
// //         <Rating/>
// //       </div>

// //   );
// // }

// // export default App;

// // import { Routes } from "react-router"

// // import { BrowserRouter, Routes, Route } from "react-router";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Rating from "./component/Rating";
// // import Qui from "./component/Qui";
// // import Result from "./component/Result";

// function App() {

//   return (

//       <div className=" place-self-center py-20">
//         <h1 className="font-bold text-6xl">Lets start Quiz</h1>
//         <button className="border-2 bg-blue-600 px-14 rounded-lg text-white py-2 mt-10" >Start</button>
//         {/* <Qui/> */}
//        {/* <Qui1/> */}
//        <ProgressBar/>

//       </div>
//       // <BrowserRouter>
//       // <Routes>
//       //   <Route path="/" element={<Layout/>}>
//       //     <Route index element={<Rating/>}/>
//       //     <Route path="qui" element={<Qui/>}/>
//       //     <Route path="result" element={<Result/>}/>

//       //   </Route>
//       // </Routes>
//       // </BrowserRouter>

//   );
// }

// export default App;
// import ProgressBar from './component/ProgressBar'

// import React from 'react'
// import UseRef from './component/UseRef'

// const App = () => {
//   return (

//             <div className=" place-self-center py-20">
//         <h1 className="font-bold text-6xl">Lets start Quiz</h1>
//         <button className="border-2 bg-blue-600 px-14 rounded-lg text-white py-2 mt-10" >Start</button>
//         {/* <Qui/> */}
//        {/* <Qui1/> */}
//        <ProgressBar/>
//        {/* <UseRef/> */}
//     </div>
//   )
// }

// export default App

// import React, { Suspense, useState } from 'react'
// import Navbar from './component/Navbar'
// import Layout from './component/Layout'
// import UseRef from './component/UseRef'
// import Qui from './component/Qui'
// import Qui1 from './component/Qui1'
// import User from './component/User'
// import { BrowserRouter, Route, Routes } from 'react-router'
// import Cards from './component/Cards'

// import { lazy } from 'react'
// import Parent from './component/Parent'
// import { useContext } from 'react'

// const Grocery= lazy(()=>import('./component/Grocery'));

// const LanguageContext= useContext(null);

// const App = () => {

// const[language, setlanguage]= useState("hindi")
//   return (
//    <BrowserRouter>
//    <LanguageContext.Provider value={language}>
//     <Routes>
//       <input type='checkbox'/>
//       <Route path='/' element={<Layout/>}>
//         {/* <Route index element={<Cards/>}/> */}
//         <Route index element={<Parent/>}/>
//         <Route path='b' element={<UseRef/>}/>
//         <Route path='user/:userId' element={<User/>}/>

//         <Route path='grocery' element={
//           <Suspense fallback={<h1>Loading</h1>}>
//             <Grocery/>
//           </Suspense>

//         }/>

//       </Route>
//     </Routes>
//     </LanguageContext.Provider>
//    </BrowserRouter>
//   )
// }

// export default App

// import React, { createContext, useState } from "react";
// import Parent from "./component/Parent";
// import { BrowserRouter, Route, Routes } from "react-router";

// export const languageContext = createContext(null);

// const App = () => {
//   const [language, setLanguage] = useState("English");
//   return (
//     <languageContext.Provider value={language}>
//       <div>
//         <input type="checkbox" 
//             checked={language==="Hindi"}
//             onChange={(e)=>setLanguage(e.target.checked? "Hindi":"English")}
//             />
//         <BrowserRouter>
//           <Routes>
//             <Route>
//               <Route path="/" element={<Parent />} />
              
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </languageContext.Provider>
//   );
// };

// export default App;


{/* <input
type="checkbox"
checked={language === "Hindi"}
onChange={(e)=>{setLanguage(e.target.checked ? "Hindi" : "English")}}
/>
App
<Parent /> */}



import React, { useState } from 'react';
import Navbar1 from './component/Navbar1';
import Sideheader from './component/Sideheader';
import Header from './component/Header';
import Table from './component/Table';
import SwiggyApi from './component/SwiggyApi';
import FormTab from './component/FormTab';
import { FormContext, FormContextProvider } from './context/FormDataContext';
import InfiniteScroll from './component/InfiniteScroll';
import Accordian from './component/accordian/Accordian';
import ImageSlider from './component/ImageSlider';
import NestedComment from './component/NestedComment/NestedComment';

const App = () => {
 
  return (
   
   <FormContextProvider>
    <div>
      {/* <Navbar1/>
    
      <div className='flex '>
        <div>
            <Sideheader/>
        </div>
        <div className='flex flex-col'>
            <Header/>
            <Table/>
            <SwiggyApi/>
        </div>
      </div> */}
      <h1 className='p-40'>hfgydrtytdwr</h1>
      {/* <FormTab/> */}
      {/* <InfiniteScroll/> */}

      {/* <Accordian/> */}
      {/* <ImageSlider/> */}
      <NestedComment/>
    </div>
    </FormContextProvider>
   
  );
};

export default App;