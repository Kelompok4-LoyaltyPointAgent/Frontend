import React from 'react'
import { Card } from 'react-bootstrap'

const CardTopPaket = () => {
    return (
        <div className='d-flex flex-row flex-wrap' style={{ gap: '86px' }}>
            <Card className='d-flex' 
            style={{ borderRadius: '10px', borderLeftColor: '#2B669F', borderLeftWidth:'4px',width: '15rem', padding: '10px' }}>
                <span className='mt-2 mb-2 ms-2'><h5>Stok Produk</h5></span>
                <span className='mb-2 ms-2' style={{color:'#2B669F'}}><h5>1.517</h5></span>
            </Card>
            <Card className='d-flex' 
            style={{ borderRadius: '10px', borderLeftColor: '#559CC0', borderLeftWidth:'4px',width: '15rem', padding: '10px' }}>
                <span className='mt-2 mb-2 ms-2'><h5>Saldo Cash Out</h5></span>
                <span className='mb-2 ms-2' style={{color:'#559CC0'}}><h5>Rp. 1.760.063</h5></span>
            </Card>
            <Card className='d-flex' 
            style={{ borderRadius: '10px', borderLeftColor: '#CC8A93', borderLeftWidth:'4px',width: '15rem', padding: '10px' }}>
                <span className='mt-2 mb-2 ms-2' ><h5>Provider</h5></span>
                <span className='mb-2 ms-2' style={{color:'#CC8A93'}}><h5>10</h5></span>
            </Card>
            <Card className='d-flex' 
            style={{ borderRadius: '10px', borderLeftColor: '#66A46C', borderLeftWidth:'4px',width: '15rem', padding: '10px' }}>
                <span className='mt-2 mb-2 ms-2'><h5>Poin</h5></span>
                <span className='mb-2 ms-2' style={{color:'#66A46C'}}><h5>120.000</h5></span>
            </Card>
        </div>
    )
}

export default CardTopPaket