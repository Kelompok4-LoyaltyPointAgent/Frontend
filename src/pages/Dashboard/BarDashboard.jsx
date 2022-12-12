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
import { DoughnutDashboard } from './DonatDashboard'

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
        labels: ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'July','Agustus','September','Oktober','November','Desember'],
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
        <div className='d-flex flex-row mt-5 mb-2 justify-content-between'>
            <Card className='p-3 pe-5'>
                <span className='mb-3'>Tahun Ini</span>
                <div style={{ width: 850}}>
                    <Bar
                        data={data}
                        height={300}
                        options={options}
                    />
                </div>
                <span className='text-center mt-4'><h4>Produk Terjual</h4></span>
            </Card>
            <Card className='d-flex p-3'>
               <DoughnutDashboard/>
            </Card>
        </div>

    )
}

export default BarDashboard