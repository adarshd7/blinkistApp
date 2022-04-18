
import { Button,ButtonProps} from "@mui/material";
import React from "react";


interface IButton extends ButtonProps{
handleClick?:()=>void,


}

const Buttons= (props:IButton) =>{
    return <Button >{props.children}</Button>
}
export default Buttons