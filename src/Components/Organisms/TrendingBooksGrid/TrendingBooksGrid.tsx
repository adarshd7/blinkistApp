
import BookGrid from "../BookGrid/BookGrid";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { customStyles } from "../../../Theme";
import { useNavigate } from "react-router-dom";


const TrendingBooksGrid=()=> {
    const classes=customStyles();
    const navigate=useNavigate();
    const [trending, setTrendingBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/trending").then((res) => {
      setTrendingBooks(res.data);
    });
  }, []);
  const [justAdded, setjustAddedBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/justAdded").then((res) => {
      setjustAddedBooks(res.data);
    });
  }, []);
  const [featured, setfeaturedBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/featured").then((res) => {
      setfeaturedBooks(res.data);
    });
  }, []);
  
  return (
     
    <div >
      <Typography variant="subtitle1" className={classes.blinks} >
      Trending Blinks
      </Typography>
      <BookGrid bookList={trending} handleClick={()=>navigate('bookdetails')} ></BookGrid>
      <Typography variant="subtitle1" className={classes.blinks} >
      Just added
      </Typography>
      <BookGrid bookList={justAdded} ></BookGrid>
      <Typography variant="subtitle1" className={classes.blinks} >
      Featured
      </Typography>
      <BookGrid bookList={featured} ></BookGrid>
    </div>
  );
}
export default TrendingBooksGrid;