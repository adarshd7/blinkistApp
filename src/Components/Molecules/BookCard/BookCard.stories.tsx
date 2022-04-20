import BookCard from "./BookCard";
import book2 from "../../Atoms/CoverImages/2.png"

export default {
  title: "Molecules/bookCard",
  component: BookCard,
} 

export const bookCard = () => (
  <BookCard
    id={2}
    image="/assets/Images/2.png"
    title="Beyond Entrepreneurship"
    author="Jim Collins & Bill Lazier"
    time="13 minutes read"
    reads="1.9k reads"
    finished={true}
 
  />
);
