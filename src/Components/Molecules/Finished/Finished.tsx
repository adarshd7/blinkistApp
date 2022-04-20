
import { Button } from "@mui/material";
import axios from "axios";
type propTypes = {
   id:number

 }
 
 const Finished = (props:propTypes) => {
      
 async function addToFinished(){
      await  axios.get(`http://localhost:3001/books/${props.id}`)
        .then(async response=>{
          
            response.data["finished"]=true;
            console.log(response.data);
           await axios.delete(`http://localhost:3001/books/${props.id}`)
          await  axios.post(`http://localhost:3001/finishedbooks/`,response.data);
            
          }
        )
        ;
       
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
    onClick={addToFinished}
  >
    Finished
  </Button>
);
  }
 

export default Finished;
