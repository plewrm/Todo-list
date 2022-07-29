import React from 'react';
import { Button } from 'react-bootstrap';
import { Fragment } from "react";
// export const Todoitem = ({todo}) => {
//   // let i=props;
//   // console.log("props",props?.todo)
//   return(
//     // props.todos.map((props)=>(
//       <div>
//       <h3 className='Left'>{todo.sno}</h3>
//       <h4 className='Left'>{todo.title}</h4>
//       <p className='Left'>{todo.desc}</p>
//       <Button className='Leftr' variant="danger">Delete</Button> 
//       </div>
      
      
//     // ))
//   )
// }

export const Todoitem = (props) => {

  // const onDelete=()=>{
  //   console.log("I am Delete");
  //     }

  // let i=props;
  console.log("props====",props?.todo[0])
  
  return(
    
    props?.todo?.map((index, id)=>(
      <> 
      <h3 className='Left'>{index.sno}</h3>
      <h4 className='Left'>{index.title}</h4>
      <p className='Left'>{index.desc}</p>
      <Button className='Leftr' variant="danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</Button> 
      </>
      
      
    ))
  )
}


