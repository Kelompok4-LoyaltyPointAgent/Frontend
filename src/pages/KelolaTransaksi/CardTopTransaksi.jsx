import React from 'react'
import { Card } from 'react-bootstrap'

const CardTopTransaksi = () => {
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
            <Card className='d-flex' 
            style={{ borderRadius: '10px', borderLeftColor: '#E09456', borderLeftWidth:'4px',width: '15rem', padding: '10px' }}>
                <span className='mt-2 mb-2 ms-2' style={{color:"#838587"}}><h5>Transaksi</h5></span>
                <span className='mb-2 ms-2' style={{color:'#2E09456'}}><h5>512</h5></span>
            </Card>
            <Card className='d-flex' 
            style={{ borderRadius: '10px', borderLeftColor: '#66A46C', borderLeftWidth:'4px',width: '15rem', padding: '10px' }}>
                <span className='mt-2 mb-2 ms-2'  style={{color:"#838587"}}><h5>Sukses</h5></span>
                <span className='mb-2 ms-2' style={{color:'#66A46C'}}><h5>540</h5></span>
            </Card>
            <Card className='d-flex' 
            style={{ borderRadius: '10px', borderLeftColor: '#5684B2', borderLeftWidth:'4px',width: '15rem', padding: '10px' }}>
                <span className='mt-2 mb-2 ms-2'  style={{color:"#838587"}}><h5>Dalam Proses</h5></span>
                <span className='mb-2 ms-2' style={{color:'#5684B2'}}><h5>125</h5></span>
            </Card>
            <Card className='d-flex' 
            style={{ borderRadius: '10px', borderLeftColor: '#BB6470', borderLeftWidth:'4px',width: '15rem', padding: '10px' }}>
                <span className='mt-2 mb-2 ms-2'  style={{color:"#838587"}}><h5>Gagal</h5></span>
                <span className='mb-2 ms-2' style={{color:'#BB6470'}}><h5>0</h5></span>
            </Card>
        </div>
  )
}

export default CardTopTransaksi