import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TextField } from "@mui/material";
import { BiSearch, BiSortDown } from "react-icons/bi";
import AddStockPaket from "./AddStockPaket";

const StokPaketData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-100">
      {isOpen && <AddStockPaket handleClose={togglePopUp} />}
      <div className="d-flex flex-row justify-content-between mb-3">
        <Button variant="success" onClick={togglePopUp}>
          <AiOutlinePlusSquare
            style={{
              width: "20px",
              height: "25px",
              paddingBottom: "3px",
              marginRight: "10px",
            }}
          />
          Tambah Produk
        </Button>
        <div className="d-flex flex-row gap-2 pe-3">
          <div className="">
            <TextField
              id="search"
              variant="outlined"
              label={
                <p style={{ fontSize: "13px", fontWeight: "540" }}>
                  <BiSearch style={{ height: "20px", width: "20px" }} />
                  Cari
                </p>
              }
              size="small"
            />
          </div>
          <div>
            <BiSortDown style={{ height: "40px", width: "30px" }} />
          </div>
        </div>
      </div>
      <div className="">
        <Button href='/kelolastok/detaileditproduk/paket'>Detail tes</Button>
        Paket Data
      </div>
    </div>
  );
};

export default StokPaketData;
