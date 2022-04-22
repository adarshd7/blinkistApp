import BookGrid from "./BookGrid";
import { books } from "../../../Constant";
import { VoicemailRounded } from "@mui/icons-material";


export default {
  title: "Organisms/BookGrid",
  component: BookGrid,
} 

export const bookGrid = () => (
  <BookGrid bookList={books} value={()=>{}} ></BookGrid>
);