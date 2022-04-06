import React from 'react'
import { Typography } from '@material-ui/core'
import { ReactNode } from 'react'

export interface Authorprops{
children:ReactNode,
}
function Author(props:Authorprops) {
  return (
    <Typography>
        {props.children}
    </Typography>
  )
}

export default Author;