import React from "react";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { customStyles } from "../../../Theme/index";
import { Typography } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { ReactComponent as Timer} from "../../../assessts/Timer.svg";
import Icon from "../../Atoms/Icon/Icon";
import AddIcon from '@mui/icons-material/Add';
import  Finished  from "../Finished/Finished";
import axios from "axios";
import  ReadAgain from "../ReadAgain/ReadAgain";
import {ReactComponent as add} from "../../../assessts/Add.svg"


export interface IBookCardProps {
    id:number;
   image: string;
  title: string;
   author: string;
   time: string;
   reads?: String;
  finished:boolean;

}



const BookCard= (props: IBookCardProps) => {
 
  const classes = customStyles();
  return (
    <Card className={classes.CardHead}>
      <CardMedia
        component="img"
        alt="Card-image"
        height="292px"
        width="294.1px"
        image={props.image}
      />
      
      <CardContent>
      <Grid container item direction="column" rowSpacing={3}>
        <Grid item>
        <Typography
          variant="subtitle1"
          component="div"
          children={props.title}
          className={classes.bookTitle}
          textAlign="left"
        />
        </Grid>
        <Grid item>
        <Typography
          variant="body1"
          component="div"
          children={props.author}
          className={classes.bookAuthor}
          textAlign="left"
        />
        </Grid>
        <Grid item>
        <div style={{ display: "flex", columnGap: "44px" }}>
        <Grid item container direction="row"  >
            <Grid item >
            <Typography sx={{display:"flex"}}>
              <Icon icon={Timer}/>{props.time}
            </Typography>
            </Grid>
           
            <Grid item>
            <Typography sx={{display:"flex",marginLeft:"26px"}}>
              <PersonOutlineIcon/>{props.reads}
            </Typography>
            </Grid>
            
          </Grid>
         
        </div>
        </Grid>
        </Grid>
      </CardContent>
     
      <CardActions
        sx={{
          justifyContent: "center",
          mb: "12px",
          padding: "0px",
          height: "20px",
        }}
      >
      {props.finished?(
          <ReadAgain id={props.id}></ReadAgain>
          ) : (
           <Finished id={props.id}></Finished>
          )}
       
        
   
      </CardActions>
      <div>
        {props.finished ? (
          <>
            <Grid
              item
              xs={4}
              sx={{ backgroundColor: "#DFE8F6", height: "15px" }}
            />
          </>
        ) : (
          <Grid container direction="row">
            <Grid item xs={4} sx={{ backgroundColor: "#E1ECFC" }} />
            <Grid
              item
              xs={8}
              sx={{
                background: "#F1F6F4",
                border: "1px solid #E1ECFC",
                height: "15px",
              }}
            />
          </Grid>
        )}
      </div>
    </Card>
  );}
  
  export default BookCard;













  // const BookCard=(props: IBookCardProps)=>{
  
//   return (
//     <Grid item container
      
//       sx={{
//         borderRadius: "8px",
//         border: "1px solid #E1ECFC",
//         overflow: "hidden",
       
       
//       }} >
//       <Grid item>
//       <img src={props.image} alt="Book"></img>
//       </Grid>
      
//         <Grid
//           item
//           container
//           sx={{ marginLeft: "15px" }} direction="column"
//         >
//           <Grid item alignItems="center">
//           <Typography variant="subtitle2" sx={{ marginTop: "16px" }}>
//           {props.title}
//           </Typography>
//           </Grid>
//           <Grid item>
//             <Typography>
//             {props.author}
//             </Typography>
          
//           </Grid>
//             <Grid item container>
            
//                 <Typography sx={{display:"flex"}}>
//                   <Icon icon={Timer}/>{props.time}
//                 </Typography>

//                 <Typography sx={{display:"flex"}}>
//                 <PersonOutlineIcon/>{props.reads}
//                 </Typography>
      
//             </Grid>
//             <Grid item >   
//           {props.finished?
//             <Buttons sx={{textTransform:"none"}}>
//               Finished
//             </Buttons> : <Buttons sx={{textTransform:"none"}}>
//               Read Again
//             </Buttons> }
//           </Grid>
//           </Grid>

         

//         <Grid item container sx={{height:"15px"}} >
//           <Grid item xs={4} sx={{ backgroundColor: "#E1ECFC" }} />
//           <Grid item xs={8} sx={{ background: "#F1F6F4" }} />
//         </Grid>
//     </Grid>
//   );
// }

//export default BookCard;

{/* //{props.addtolib ? ( <Button variant="text" >
        
        //<Typography component='div' sx={{display:"flex",alignItems:"center"}} className={classes.addToLib}><AddIcon/>Add to library</Typography>

    //</Button> ):(props.finished?( */} 
         {/* // <ReadAgain id={props.id}></ReadAgain>
          ) : (
         //  <Finished id={props.id}></Finished>
         // ))} */}