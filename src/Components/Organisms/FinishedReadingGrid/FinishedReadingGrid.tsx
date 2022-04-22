import axios from "axios";
import React from "react";
import BookGrid from "../BookGrid/BookGrid";
import { useState } from "react";
import { useEffect } from "react";

const FinishedReadingGrid=()=>{
  const [finishedreading, setFinishedReadingBooks] = useState([]);
  const [v, setVar] = useState<number>(0);
useEffect(() => {
    axios.get("http://localhost:3001/finishedbooks").then((res) => {
      setFinishedReadingBooks(res.data);
    },);
  },[v]);
  function setval(newVar:number){
    setVar(newVar);
 }
  return (
    <BookGrid bookList={finishedreading} value={setval}/>
  );
}

export default FinishedReadingGrid;