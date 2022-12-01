import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Card, CardImg, Button} from 'react-bootstrap'
import Sidebar from '../../components/sidebar/Sidebar'
import '../../assets/styles/DetailEditProduk.css'
import EditProdukPulsa from './EditProdukPulsa';

const DetailEditProdukPulsa = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };


  const handleGoBack = ()=>{
    navigate(-1);
  }
  return (
    <>
    <div className='d-flex'>
      <Sidebar list={4}/>
      <div className='mt-5 pt-5 ps-3 pe-3 w-100'>
      {isOpen && <EditProdukPulsa handleClose={togglePopUp} />}
        <Card border='dark'>
          <CardImg style={{padding: '10px', height: '250px', marginBottom:'20px'}} src={require('../../assets/images/Banner Pulsa.png')}/>
          <div className='d-flex justify-content-between list-detail'>
            <p className='detail-produk-text'>Masa Aktif</p>
            <p className='detail-produk-text'>60 Hari</p>
          </div>
          <div className='d-flex justify-content-between list-detail'>
            <p className='detail-produk-text'>Stok</p>
            <p className='detail-produk-text'>500</p>
          </div>
          <div className='d-flex justify-content-between list-detail'>
            <p className='detail-produk-text'>Harga</p>
            <p className='detail-produk-text'>Rp 12.000</p>
          </div>
          <div className='d-flex justify-content-between list-detail'>
            <p className='detail-produk-text'>Harga (Poin)</p>
            <p className='detail-produk-text'>1.200</p>
          </div>
          <div style={{marginLeft:'100px'}}>
            <p>Deskripsi</p>
            <p>Dapatkan pulsa 10.000 dengan harga Rp 12.000 Harga sudah termasuk PPN 10%</p>
          </div>
          <div className='mt-3 mb-4 d-flex justify-content-center gap-5'>
            <Button onClick={togglePopUp} >Ubah</Button>
            <Button variant='danger' onClick={handleGoBack}>Kembali</Button>
          </div>
        </Card>
      </div>
    </div>
    </>
  )
}

export default DetailEditProdukPulsa