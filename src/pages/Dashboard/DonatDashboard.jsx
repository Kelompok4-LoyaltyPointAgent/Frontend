import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Purchase', 'Redeem', 'Cashout'],
  datasets: [
    {
      label: 'Persentase',
      data: [37, 24, 49],
      backgroundColor: [
        'rgb(42, 176, 112)',
        'rgb(209, 95, 2)',
        'rgb(0, 107, 160)'
      ],
      borderColor: [
        'rgb(42, 176, 112)',
        'rgb(209, 95, 2)',
        'rgb(0, 107, 160)'
      ],
      
    },
  ],
};

export function DoughnutDashboard() {
  return (
    <div style={{width:250, height: 400}}>
      <span className='mb-3'>Aktivitas</span>
        <Doughnut
          data={data}
      />
    </div>

    
  )
  
}