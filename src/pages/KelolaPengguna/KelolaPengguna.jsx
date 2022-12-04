import React, {useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Sidebar from "../../components/sidebar/Sidebar";
import ListUser from "./ListUser";
import ListAdmin from "./ListAdmin";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TextField } from '@mui/material';
import {BiSearch, BiSortDown} from 'react-icons/bi'
import AddUser from "./AddUser";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function KelolaPengguna() {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex">
        <Sidebar list={2} />
        {isOpen && <AddUser handleClose={togglePopUp} />}

        <div className="mt-5 pt-5 ps-3 pe-3 w-100">
        <Card className='d-flex'>
          <div style={{ backgroundColor: 'whitesmoke' }}>
          <p className='mb-4 mt-1 ps-3 pt-3'>Kelola Pengguna</p>
            <div className="d-flex ps-3" >
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="User" {...a11yProps(0)} />
                <Tab label="Admin" {...a11yProps(1)} />
              </Tabs>
            </div>
          </div>
            <TabPanel value={value} index={0}>
              <ListUser />
            </TabPanel>
            <TabPanel value={value} index={1}>
            </TabPanel>
          </Card>
        </div>
      </div>
    </>
  );
}
