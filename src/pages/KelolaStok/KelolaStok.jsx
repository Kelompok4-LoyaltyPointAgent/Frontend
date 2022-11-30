import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StokPulsa from "./StokPulsa";
import Sidebar from "../../components/sidebar/Sidebar";
import StokPaketData from "./StokPaketData";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TextField } from '@mui/material';
import {BiSearch, BiSortDown} from 'react-icons/bi'

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

export default function KelolaStok() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="mt-5 pt-5 ps-3 pe-3 w-100">
        <Card className='d-flex'>
          <div style={{ backgroundColor: 'whitesmoke' }}>
          <p className='mb-4 mt-1 ps-3 pt-3'>Kelola Stok</p>
            <div className="d-flex ps-3" >
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Pulsa" {...a11yProps(0)} />
                <Tab label="Paket Data" {...a11yProps(1)} />
              </Tabs>
            </div>
          </div>
            <div className='d-flex flex-row justify-content-between mb-3 mt-3 ps-3'>
              <Button variant='success'> 
              {""}
              <AiOutlinePlusSquare style={{width: "20px",
              height : "25px", marginRight: "5px", 
              paddingBottom: "3px"}}/>
              Tambah Produk</Button>
              <div className='d-flex flex-row gap-2 pe-3'>
              <div className="">
              <TextField
                id="search"
                variant="outlined"
                label={<p style={{fontSize:'13px', fontWeight:'540'}}><BiSearch style={{height:'20px', width:'20px'}}/>Cari</p>}
                size='small'
              /></div>
              <div>
                <BiSortDown style={{height: '40px', width: '30px'}}/>
              </div>
              </div>
            </div>
            <TabPanel value={value} index={0}>
              <StokPulsa />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <StokPaketData />
            </TabPanel>
          </Card>
        </div>
      </div>
    </>
  );
}
