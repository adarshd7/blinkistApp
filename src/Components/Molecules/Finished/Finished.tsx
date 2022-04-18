
import { Button } from "@mui/material";
import axios from "axios";
type propTypes = {
   id:number

 }
 
 const Finished = (props:propTypes) => {
      const {id} = props

  function addToFinished(){
        axios.get(`http://localhost:3001/books/${id}`)
        .then(response=>{
          if(response.status===200){
            response.data["Finished"]=true;
            console.log(response.data);
            axios.delete(`http://localhost:3001/books/${id}`)
            axios.post(`http://localhost:3001/finishedbooks/`,response.data);
            
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
    onClick={addToFinished}
  >
    Finished
  </Button>
);
  }
 

export default Finished;