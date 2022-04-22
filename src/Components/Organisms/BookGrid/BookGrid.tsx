import Box from "@mui/material/Box";
import React from "react";
import BookCard from "../../Molecules/BookCard/BookCard";

export interface IBookList{
  id:number;
  title: string;
  author: string;
  time: string;
  image: string;
  reads?: string;
  finished:boolean;
  addtolibrary?:boolean;
  handleClick?:()=>void;
  
}

export interface IBookGridProps {
  handleClick?:()=>void,
  bookList: IBookList[],
  value?:(newVar: number) => void,

}

export default function BookGrid({bookList,value}: IBookGridProps) {

    return(
    //  <Box>
      <Box display='flex'  width="1000px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>
      {bookList.map((book)=>(
         <BookCard key={book.id}
          id={book.id}
          finished={book.finished}
          title={book.title}
          author={book.author}
          time={book.time}
          image={book.image}
          reads={book.reads}
          addtolibrary={book.addtolibrary}
          value={value}
        />))}
      </Box>
      // </Box>
    );
    
    }
    