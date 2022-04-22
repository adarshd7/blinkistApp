
  
import React from "react";
import LibraryTabs from "../Organisms/LibraryTabs/LibraryTabs";
import Footer from "../Organisms/Footer/Footer";
import Template from "../../../src/Components/Template/Template"
import Header from "../Organisms/Header/Header";


export default function MainPage() {
  

  return (
    <Template
      header={<Header></Header>}
      content={
    
        <LibraryTabs/>
        
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}