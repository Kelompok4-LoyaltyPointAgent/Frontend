import React from 'react'
import { Card } from "react-bootstrap";
import { RiUserLine } from 'react-icons/ri'
import { GoTag } from 'react-icons/go'
import { SlScreenSmartphone } from 'react-icons/sl'
import {IoMdTrendingUp} from 'react-icons/io'

const CardDashboard = () => {
    return (
        <div className='d-flex flex-row flex-wrap' style={{ gap: '86px' }}>
            <Card className='d-flex card-shadow-pengunjung'
                style={{ width: '15rem', padding: '10px' }}>
                <h4 style={{ marginLeft: '20px' }}>Pengunjung</h4>
                <div className="d-flex flex-row">
                    <RiUserLine style={{
                        marginTop: '15px', marginLeft: '20px', marginRight: '20px', padding: '9px', backgroundColor: '#D15F02',
                        width: '40px', height: '40px', borderRadius: '100px', color: 'white'
                    }} />
                    <p style={{}}>
                        <h3 className="mb-0 mt-0"
                            style={{
                                color: '#D15F02', fontWeight: '600',
                                fontSize: '38px'
                            }}>1.512</h3>
                        <p className='ms-2 mb-0'>Total</p>
                    </p>
                </div>
                <div className="d-flex flex-row justify-content-center gap-5">
                    <div className="text-center mb-0">
                        <p className="mb-1">Bulan Ini</p>
                        <p className="mb-0">283</p>
                    </div>
                    <div className="text-center mb-0">
                        <p className="mb-1">Hari Ini</p>
                        <p className="mb-0">28</p>
                    </div>
                </div>
            </Card>
            <Card className='d-flex card-shadow-pembeli'
                style={{ width: '15rem', padding: '10px' }}>
                <h4 style={{ marginLeft: '20px' }}>Pembeli</h4>
                <div className="d-flex flex-row ">
                    <GoTag style={{
                        marginTop: '15px', marginLeft: '20px', marginRight: '20px', padding: '9px',
                        backgroundColor: '#006BA0',width: '40px', height: '40px', borderRadius: '100px', color: 'white'
                    }} />
                    <p style={{}}>
                        <h3 className="mb-0 mt-0"
                            style={{
                                color: '#006BA0', fontWeight: '600',
                                fontSize: '38px'
                            }}>128</h3>
                        <p className='ms-2 mb-0'>Total</p>
                    </p>
                </div>
                <div className="d-flex flex-row justify-content-center gap-5">
                    <div className="text-center mb-0">
                        <p className="mb-1">Bulan Ini</p>
                        <p className="mb-0">68</p>
                    </div>
                    <div className="text-center mb-0">
                        <p className="mb-1">Hari Ini</p>
                        <p className="mb-0">12</p>
                    </div>
                </div>
            </Card>
            <Card className='d-flex card-shadow-apk'
                style={{ width: '15rem', padding: '10px' }}>
                <h4 style={{ marginLeft: '20px' }}>Apk Terinstall</h4>
                <div className="d-flex flex-row ">
                    <SlScreenSmartphone style={{
                        marginTop: '15px', marginLeft: '20px', marginRight: '20px', padding: '9px',
                        backgroundColor: '#197722',
                        width: '40px', height: '40px', borderRadius: '100px', color: 'white'
                    }} />
                    <p style={{}}>
                        <h3 className="mb-0 mt-0"
                            style={{
                                color: '#197722', fontWeight: '600',
                                fontSize: '38px'
                            }}>503</h3>
                        <p className='ms-1 mb-0'>Total</p>
                    </p>
                </div>
                <div className="d-flex flex-row justify-content-center gap-5">
                    <div className="text-center mb-0">
                        <p className="mb-1">Bulan Ini</p>
                        <p className="mb-0">283</p>
                    </div>
                    <div className="text-center mb-0">
                        <p className="mb-1">Hari Ini</p>
                        <p className="mb-0">20</p>
                    </div>
                </div>
            </Card>
            <Card className='d-flex card-shadow-transaksi'
                style={{ width: '15rem', padding: '10px' }}>
                <h4 style={{ marginLeft: '20px' }}>Transaksi</h4>
                <div className="d-flex flex-row ">
                    <IoMdTrendingUp style={{
                        marginTop: '15px', marginLeft: '20px', marginRight: '20px', padding: '9px',
                        backgroundColor: '#FBB505',
                        width: '40px', height: '40px', borderRadius: '100px', color: 'white'
                    }} />
                    <p style={{}}>
                        <h3 className="mb-0 mt-0"
                            style={{
                                color: '#FBB505', fontWeight: '600',
                                fontSize: '38px'
                            }}>215</h3>
                        <p className='ms-1 mb-0'>Total</p>
                    </p>
                </div>
                <div className="d-flex flex-row justify-content-center gap-5">
                    <div className="text-center mb-0">
                        <p className="mb-1">Bulan Ini</p>
                        <p className="mb-0">209</p>
                    </div>
                    <div className="text-center mb-0">
                        <p className="mb-1">Hari Ini</p>
                        <p className="mb-0">12</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardDashboard