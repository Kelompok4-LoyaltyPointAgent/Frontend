import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Sidebar from '../../components/Sidebar';
import ListUser from './ListUser';
import ListAdmin from './ListAdmin';
import { Button, Card } from 'react-bootstrap';
import {AiOutlinePlusSquare} from 'react-icons/ai';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function KelolaPengguna() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="d-flex">
      <Sidebar/>
      <div className="mt-5 pt-5 ps-3 pe-3 w-100">
      <Card className='d-flex p-3'>
      <p>Kelola Pengguna</p>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="User" {...a11yProps(0)} />
            <Tab label="Admin" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <div className='d-flex flex-row mb-3 mt-3'>
          <Button> <AiOutlinePlusSquare style={{width: "20px",
           height : "25px", marginRight: "5px", 
           paddingBottom: "3px"}}/>Tambah User</Button>
        </div>
        <TabPanel value={value} index={0}>
          <ListUser/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListAdmin/>
        </TabPanel>
      </Card>
      </div>
    </div>      
   
    </>
      
  );
}