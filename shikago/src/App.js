

import Alert from "react-bootstrap/Alert";
import Amb from './Amb.jpg'
// import Benlogo from './bentley_logo.png'
import './App.css';
import { Fragment } from "react";
import { useEffect,useState} from "react";
import Header from "./MyComponents/Header";
import React, {Todoitem} from "./MyComponents/Todoitem";
// import {Todos} from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
function App() {

  const [countsetCount]= useState()

  const onDelete=(todo)=>{
console.log("I am Delete",todo);
  }
 
 
  let todos =[
    {
      sno: 1,
      title: "Go to the Home",
      desc: "If need to describe and fullfill the merge..."
    },
    {
      sno: 2,
      title: "Go to the Market",
      desc: "If need to describe and fullfill the merge..."
    },
    {
      sno: 3,
      title: "Go to the Road",
      desc: "If need to describe and fullfill the merge..."
    },
  ]
  return (
    <div>
      <Header title=" My Title" searchBar={true} />
      {/* <Todos todos={todos} onDelete={onDelete()} /> */}
      <Todoitem  todo={todos} onDelete={onDelete}/>
      <Footer/>
    </div>

  );
}

export default App;












{/* <Fragment>
<div className="App">
  <Header/>
       <img className='App' src={Amb}  alt="logo" />
         
   </div>
   </Fragment> */}