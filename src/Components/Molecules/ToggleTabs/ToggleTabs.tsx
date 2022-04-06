import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabContext} from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ToggleTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Synopsis" value="1" />
            <Tab label="Who is it for" value="2" />
            <Tab label="About the author" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}