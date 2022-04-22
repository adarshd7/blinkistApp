import axios from "axios";
import * as React from "react";
import BookGrid from "../BookGrid/BookGrid";
import { useState } from "react";
import { useEffect } from "react";
import { Typography } from "@mui/material";



const CurrentlyReadingGrid=()=>{
  const [currentlyreading, setCurrentlyReadingBooks] = useState([]);
  const [v, setVar] = useState<number>(0);
useEffect( () => {
  axios.get("http://localhost:3001/books").then((res) => {
      setCurrentlyReadingBooks(res.data);
    });
  },[v]);
  function setval(newVar:number){

     setVar(newVar);
     console.log(v);
  }
  return (
    
    <BookGrid bookList={currentlyreading} value={setval}/>
    
  );
}

export default CurrentlyReadingGrid;