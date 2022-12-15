import React from 'react'
import { Button } from 'react-bootstrap'

const CobaGratis = () => {
  return (
    <div className='coba-page'>
        <div className='background'>
        <div className='d-flex justify-content-center'>
            <div className='d-flex flex-column' style={{marginTop:"250px", marginLeft:"600px"}}>
                <span style={{fontSize:"24px", color:"#FBB505"}}>Ingin bergabung bersama</span>
                <span style={{fontSize:"80px", fontWeight:"700", color:"#01478C"}}>Hola Pulsa ?</span>
                <span className='text-center' style={{color:"#01478C"}}>Dapatkan kami di</span>
                <div className='d-flex flex-row mt-3'>
                <Button className='d-flex flex-row'
                  style={{ padding: "5px 30px 5px 20px", borderColor: "#FBB505", backgroundColor: "#000000", marginRight: "50px" }}>
                  <img style={{ width: "50px", height: "50px", marginRight: "10px" }}
                    src={require('../../assets/images/Logo/logo playstore.png')} alt="logoPS" />
                  <div className='d-flex flex-column'>
                    <span style={{ color: "#CFD0D4" }}>Get it On</span>
                    <a style={{ color: "#F5F6F7" }} href="#">Google Play</a>
                  </div>
                </Button>
                <Button className='d-flex flex-row'
                  style={{ padding: "5px 30px 5px 20px", borderColor: "#FBB505", backgroundColor: "#000000" }}>
                  <img style={{ width: "35px", height: "35px", marginTop: "5px", marginRight: "10px" }}
                    src={require('../../assets/images/Logo/logo appstore.png')} alt="logoPS" />
                  <div className='d-flex flex-column'>
                    <span style={{ color: "#CFD0D4" }}>Download on the</span>
                    <a style={{ color: "#F5F6F7" }} href="#">App Store</a>
                  </div>
                </Button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CobaGratis