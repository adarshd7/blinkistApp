import { Button } from "@mui/material";
import axios from "axios";
type propTypes = {
   id:number

 }
 
 const ReadAgain = (props:propTypes) => {
    

  function addToCurrent(){
        axios.get(`http://localhost:3001/finishedbooks/${props.id}`)
        .then(response=>{
          if(response.status===200){
            response.data["Finished"]=false;
            console.log(response.data);
            axios.post(`http://localhost:3001/books/`,response.data);
            axios.delete(`http://localhost:3001/finishedbooks/${props.id}`)
          }
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