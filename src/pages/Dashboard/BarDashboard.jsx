import React from 'react'
import { Chart as 
    ChartJS, 
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Card } from 'react-bootstrap'

ChartJS.register(
    CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const BarDashboard = () => {
    var data = {
        labels: ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12'],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        datasets: [{
            label: 'Pembelian',
            data: [12, 19, 15, 5, 8, 6, 10, 17, 21, 25, 20, 19],
            borderWidth: 1,
            backgroundColor: [
                '#FBB505'
            ],
            borderRadius: 5,
            
        }],
    }

    var options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                },
                beginAtZero: true
            }
        }
    ,
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
        label:{
            display: false
        }
    
    }

    return (
        <div className='d-flex flex-row gap-5'>
            <div>
                <p className='mt-4'>Bulan Ini</p>
                <div className='mt-1' style={{ width: 900 , color: '#01478C',}}>
                    <Bar
                        data={data}
                        height={300}
                        Color={'#01478C'}
                        options={options}
                    />
                </div>
            </div>
            <div className='mt-4 d-flex flex-column gap-3'>
                <Card className='card-shadow-info' style={{width:'17rem', padding:'10px'}}>
                    <p>Pembelian</p>
                    <p>1.512</p>
                </Card>
                <Card className='card-shadow-info' style={{width:'17rem', padding:'10px'}}>
                    <p>Redeem</p>
                    <p>20</p>
                </Card>
                <Card className='card-shadow-info' style={{width:'17rem', padding:'10px'}}>
                    <p>Total Keuntungan</p>
                    <p>Rp. 150.000</p>
                </Card>
            </div>
        </div>

    )
}

export default BarDashboard