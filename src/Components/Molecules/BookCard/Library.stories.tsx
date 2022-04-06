import React from "react";
 import {AddToLibrary} from "./Library";
 import {ComponentMeta,ComponentStory} from "@storybook/react";
 export default{
    title:"Molecules/BookCard/addToLibrary",
   component:AddToLibrary
 } as ComponentMeta<typeof AddToLibrary>;

 export const AddToLibraryStory:ComponentStory <typeof AddToLibrary> = ()=><AddToLibrary></AddToLibrary>;