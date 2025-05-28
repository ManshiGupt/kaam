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

import Accordian from './component/accordian/Accordian';
import ImageSlider from './component/ImageSlider';
import NestedComment from './component/NestedComment/NestedComment';
import Section2 from './component/Section2';
import InfiniteScroll from './component/InfinteScrolll/InfiniteScroll';
import Pagination from './component/pagination/Pagination';
import Slide from './component/slideShow/Slide';
import Word from './component/wordOmmiter/Word';
import ProgressAnimated from './component/progressBarAnimated/ProgressAnimated';
import InputToDo from './component/InputToDo';
import Omitter from './component/Omitter';
import State from './component/stateManagement/state';
import ContactForm from './component/contactFoem/ContactForm';
import PatientRecord from './patient/PatientRecord';
import Filter from './component/Filter';
import UseRefBox from './component/UseRefBox';
import ButtonDelete from './component/ButtonDelete';
import OtpBar from './component/otp/OtpBar';
import Body from './component/swiggy/Body';
import Otp from './component/Otp';
import Table1 from './component/Table1';
import SideDrawer from './component/SideDrawer';
import Otp2 from './component/otp/Otp2';
import Otp1 from './component/otp/Otp1';
import Search2 from './component/Search2';
import Accordian1 from './component/Accordian1';
import FlipkartSearchBold from './component/FlipkartSearchBold';
import TabDataPersi from './component/TabDataPersi';
import Omitter1 from './component/Omitter1';
import FormPatient1 from './component/FormPatient1';
import Conditional from './component/Conditional';
import ToDoList from './component/todoList/toDoList';
import Corousal from './component/corousal';
import CorousalMoreImage from './component/CorousalMoreImage';
import ScrollBar from './component/ScrollBar';
import ChipInputs from './component/ChipInputs';
import LoadSkeleton from './component/LoadSkeleton';
import BlogPost from './component/akshaySainiInterviewPre/BlogPost';
import StopWatch from './component/akshaySainiInterviewPre/StopWatch';
import SortableList from './component/akshaySainiInterviewPre/SortableList';
import GridLights from './component/akshaySainiInterviewPre/GridLights';
// import FindMax from "./component/akshaySainiInterviewPre/FindMax"


// import { Provider } from 'react-redux'
// import { store } from './store/globalStore';

const App = () => {
 
  return (
    // <Provider store={store}>
   
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
      {/* <Section2/> */}
      {/* <Pagination/> */}
      {/* <Slide/> */}
      {/* <Word/> */}
      {/* <ProgressAnimated/> */}

      {/* <Accordian/> */}
      {/* <ImageSlider/> */}
      {/* <NestedComment/> */}
      {/* <InputToDo/> */}
      {/* <Omitter/> */}
      {/* <State/> */}
      {/* <ContactForm/> */}
      {/* <PatientRecord/>
      <Filter/> */}
      {/* <UseRefBox/> */}
      {/* <ButtonDelete/> */}
      {/* <Body/> */}
      {/* <Otp/> */}
      {/* <Table1/> */}
      {/* <SideDrawer/> */}
      {/* <Otp2/> */}
      {/* <Otp/>
      <OtpBar/> */}
      {/* <Otp1/> */}
      {/* <Search2/> */}
      {/* <TabDataPersi/> */}
      {/* <FlipkartSearchBold/> */}
      {/* <Accordian1/> */}
      {/* <Omitter1/> */}
      {/* <FormPatient1/> */}
      {/* <Conditional/> */}
     {/* <ToDoList/> */}
     {/* <Corousal/> */}
     {/* <CorousalMoreImage/>
     <ScrollBar/> */}
     {/* <ChipInputs/> */}
     {/* <LoadSkeleton/> */}
     {/* <BlogPost/> */}
     {/* <StopWatch/> */}
     {/* <SortableList/> */}
     {/* <GridLights/> */}
     {/* <FindMax/> */}
    </div>
    </FormContextProvider>
    // </Provider>
   
  );
};

export default App;