import { Button } from "@mui/material";
import axios from "axios";
type propTypes = {
   id:number

 }
 
 const ReadAgain = (props:propTypes) => {
    

   async function addToCurrent(){
       await axios.get(`http://localhost:3001/finishedbooks/${props.id}`)
        .then(async response=>{
          
            response.data["finished"]=false;
            console.log(response.data);
        await    axios.delete(`http://localhost:3001/finishedbooks/${props.id}`);
        await    axios.post(`http://localhost:3001/books/`,response.data);
        
          
        });
  }


  return(

  <Button variant="text" sx={{
      width: "100%",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      color: "#0365F2",

    }}
    onClick={addToCurrent}
  >
    ReadAgain
  </Button>
);
  }
 

export default ReadAgain;