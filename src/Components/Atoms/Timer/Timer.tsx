import React from 'react'
import { Typography } from '@material-ui/core'
import { ReactNode } from 'react'

export interface Timeprops{
children:ReactNode,
}
function Timer(props:Timeprops) {
  return (
    <Typography>
        {props.children}
    </Typography>
  )
}

export default Timer