import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'
import '../../assets/styles/DetailEditProduk.css'
import EditPengguna from './EditPengguna';
import NewSidebar from '../../components/sidebar/NewSidebar';
import { getDetailUser } from '../../api/getDetailPengguna';
import NavbarTop from '../../components/NavbarTop';

const DetailEditPengguna = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    console.log(id)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await getDetailUser(id);
            setData(res.data.data);
        };

        fetchPosts(data);
    }, [id]);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };
    console.log(data)

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <>
            <div className='d-flex'>
                <NewSidebar />
                <div className='w-100'>
                    <NavbarTop />
                    <div className='mt-3 ps-3 pe-3 w-100'>
                        {isOpen && <EditPengguna handleClose={togglePopUp} />}
                        <Card border='dark'>
                            <Card.Header>
                                <div className='d-flex flex-row'>
                                    <div>
                                        <img alt=""
                                            style={{ paddingTop: "10px", paddingBottom: "10px", width: "150px", height: "150px" }}
                                            src={require('../../assets/images/User/Rectangle 20.png')} />
                                    </div>
                                    <div style={{ paddingTop: "10px", marginTop: "15px", marginLeft: "20px" }}>
                                        <p style={{ marginBottom:'30px', color: "#01478C" }}><h3>{data.name}</h3></p>
                                        <span style={{
                                            padding: "10px 25px 10px 25px", backgroundColor: "#032B54", borderRadius: "50px",
                                            textAlign: "center", width: "80%", fontSize: "19px", color:'white'
                                        }}>
                                            Pelanggan</span>
                                    </div>
                                </div>

                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div className='mt-2 d-flex justify-content-between list-detail'>
                                        <p className='detail-produk-text'>Nama Lengkap</p>
                                        <p className='detail-produk-text'>{data.name}</p>
                                    </div>
                                    <div className='mt-2 d-flex justify-content-between list-detail'>
                                        <p className='detail-produk-text'>Email</p>
                                        <p className='detail-produk-text'>{data.email}</p>
                                    </div>
                                    <div className='mt-2 d-flex justify-content-between list-detail'>
                                        <p className='detail-produk-text'>No. Telepon</p>
                                        <p className='detail-produk-text'>0812345678</p>
                                    </div><div className='mt-2 d-flex justify-content-between list-detail'>
                                        <p className='detail-produk-text'>Poin</p>
                                        <p className='detail-produk-text'>{data.points}</p>
                                    </div>
                                    <div className='mt-2 d-flex justify-content-between list-detail'>
                                        <p className='detail-produk-text'>Password</p>
                                        <p className='detail-produk-text'>Ayo tebak...</p>
                                    </div>
                                    <br /><br /><br /><br /><br />
                                    <div style={{ position: 'relative' }} className='mb-2 d-flex justify-content-center gap-5'>
                                        <Button style={{ backgroundColor: '#006BA0', borderColor: '#006BA0' }} onClick={togglePopUp} >Ubah</Button>
                                        <Button style={{ backgroundColor: '#D15F02', borderColor: '#D15F02' }} onClick={handleGoBack}>Kembali</Button>
                                        <Button style={{ backgroundColor: '#FCC12F', borderColor: '#FCC12F', color: "#013B75" }}>
                                            Lihat Riwayat Transaksi
                                        </Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailEditPengguna