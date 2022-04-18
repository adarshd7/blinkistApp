import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabContext} from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {customStyles} from "../../../Theme/index";
import CurrentlyReadingGrid from '../CurrentlyReadingGrid/CurrentlyReadingGrid';
import FinishedReadingGrid from '../FinishedReadingGrid/FinishedReadingGrid';
import { Typography } from '@mui/material';


export default function ToggleTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const classes=customStyles();

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} TabIndicatorProps={{style: { background: "#2CE080"}}}>
            <Tab label={<Typography sx={{color:value==="1"?"#22C870":"#6D787E",textTransform:"none"}}> Currently Reading</Typography>} value="1"  />
            <Tab label={<Typography sx={{color:value==="2"?"#22C870":"#6D787E",textTransform:"none"}}>Finished</Typography>} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><CurrentlyReadingGrid/></TabPanel>
        <TabPanel value="2"><FinishedReadingGrid/></TabPanel> 
      </TabContext>
    </Box>
  );
}