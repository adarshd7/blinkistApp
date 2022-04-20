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
  
}

export interface IBookGridProps {

  bookList: IBookList[],

}

export default function BookGrid(props: IBookGridProps) {

    return(
     <Box>
      <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>
      {props.bookList.map((book)=>(
         <BookCard key={book.id}
          id={book.id}
          finished={book.finished}
          title={book.title}
          author={book.author}
          time={book.time}
          image={book.image}
          reads={book.reads}
        />))}
      </Box>
      </Box>
    );
    
    }
    