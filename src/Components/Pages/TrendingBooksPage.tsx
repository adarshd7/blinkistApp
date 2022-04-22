  
import React from "react";
import Footer from "../Organisms/Footer/Footer";
import Template from "../../../src/Components/Template/Template"
import Header from "../Organisms/Header/Header";
import { SearchBox } from "../Molecules/SearchBox/SearchBox";
import Banner from "../Molecules/Banner/Banner";
import TrendingBooksGrid from "../Organisms/TrendingBooksGrid/TrendingBooksGrid";
import { Box } from "@mui/material";


export default function MainPage() {
  

  return (
    <Template
      header={<Header></Header>}
      content={

        <Box style={{display:'flex', flexDirection:'column', width:'1000px'}}>
        <Banner/>
        <SearchBox/>
        <TrendingBooksGrid/>
        </Box>
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}