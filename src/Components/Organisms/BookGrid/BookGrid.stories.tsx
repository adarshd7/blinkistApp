import BookGrid from "./BookGrid";
import { books } from "../../../Constant";


export default {
  title: "Organisms/BookGrid",
  component: BookGrid,
} 

export const bookGrid = () => (
  <BookGrid bookList={books}  ></BookGrid>
);