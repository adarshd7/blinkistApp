import * as React from "react";
import Footer from "../Organisms/Footer/Footer";
import Template from "../../../src/Components/Template/Template"
import Header from "../Organisms/Header/Header";
import BookDetailGrid from "../Organisms/BookDetailGrid/BookDetailGrid";

export default function MainPage() {
  

  return (
    <Template
      header={<Header></Header>}
      content={
          <BookDetailGrid/>
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}