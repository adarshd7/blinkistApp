import axios from "axios";
import * as React from "react";
import BookGrid from "../BookGrid/BookGrid";
import { useState } from "react";
import { useEffect } from "react";
import { Typography } from "@mui/material";

const CurrentlyReadingGrid=()=>{
  const [currentlyreading, setCurrentlyReadingBooks] = useState([]);
useEffect( () => {
  axios.get("http://localhost:3001/books").then((res) => {
      setCurrentlyReadingBooks(res.data);
    });
  },[currentlyreading]);
  
  return (
    
    <BookGrid bookList={currentlyreading} />
    
  );
}

export default CurrentlyReadingGrid;