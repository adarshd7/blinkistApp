

import React from "react";
import Buttons from "./Button";



export default{
title:'Atoms/ButtonStory',
Component:Buttons
} 


export const button = ()=><Buttons handleClick={()=>alert("")}>
            hi
</Buttons>