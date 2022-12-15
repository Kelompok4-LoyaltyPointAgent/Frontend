import React from 'react'
import { Card, Col, Nav } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const KontakKami = () => {
  return (
    <div className='kontak-kami'>
      <div className='background-k'>
        <Col sm={5} lg={5}><br /><br /><br />
          <div style={{ marginTop: "80px", marginLeft: '150px' }} className="d-flex flex-column">
            <span style={{ color: "#01478C", fontSize: "70px", fontWeight: "700" }}>Kontak Kami</span>
            <span>
              Kami akan terbuka untuk anda. pesan Anda akan dirahasiakan dan itu akan ditempatkan untuk menjadi yang teratas untuk menanggapi Anda hari ini.
            </span>
          </div>
          <Card style={{
            marginLeft: '150px', marginTop: "30px", padding: '20px',
            backgroundColor: "#01478C", color: "#F5F6F7"
          }}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Yuk masukan nama anda" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Yuk masukan gmail anda" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pesan</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className='w-100' type="submit"
                style={{ backgroundColor: "#FBB505", color: "#434952" }}>
                Kirim Tanggapan
              </Button>
            </Form>
          </Card>
        </Col>
        <div className="d-flex flex-column w-100" style={{
          marginTop: "140px", height: "38vh", backgroundColor: "#012F5D"
          , borderRadius: "20px 20px 0px 0px", padding: "10px", color: "#F5F6F7"
        }}>
          <div className='d-flex flex-row'>
            <Col sm={5} lg={5} style={{ marginLeft: "70px", marginTop: "10px" }} className="d-flex flex-column">
              <img src={require('../../assets/images/Logo/Logo Navbar Landing Page.png')}
                style={{ width: "270px" }} alt="logo" />
              <span>
                Gunakan terus Hola Pulsa pasti #Ambyar Murahnya
              </span>
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
            </Col>
            <Col sm={4} lg={4} className="d-flex flex-column gap-4 mt-3"
              style={{ marginTop: "30px" }} >
              <Nav.Link style={{ fontSize: "20px", color: "#FBB505" }} href='#beranda'>Beranda</Nav.Link>
              <Nav.Link href="#tentang-kami" style={{ fontSize: "20px", color: "#FBB505" }} >Tentang Kami</Nav.Link>
              <Nav.Link href="#layanan" style={{ fontSize: "20px", color: "#FBB505" }} >Program</Nav.Link>
            </Col>
            <Col sm={2} lg={2}>
              <img style={{ marginTop: "20px" }}
                src={require('../../assets/images/Logo/card cs.png')} alt="logoCS" />
            </Col>
          </div>
          <div className='d-flex justify-content-center mt-4'>
            <span style={{fontSize:"20px"}}>Copyright 2022 Kelompok 4 Capstone Project - Alterra Academy</span>
          </div>


        </div>
      </div>
    </div>
  )
}

export default KontakKami