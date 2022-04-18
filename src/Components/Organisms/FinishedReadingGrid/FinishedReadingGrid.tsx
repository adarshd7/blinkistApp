import axios from "axios";
import React from "react";
import BookGrid from "../BookGrid/BookGrid";
import { useState } from "react";
import { useEffect } from "react";

const FinishedReadingGrid=()=>{
  const [finishedreading, setFinishedReadingBooks] = useState([]);
useEffect(() => {
    axios.get("http://localhost:3001/finishedbooks").then((res) => {
      setFinishedReadingBooks(res.data);
    });
  }, []);
  
  return (
    <BookGrid bookList={finishedreading} />
  );
}

export default FinishedReadingGrid;