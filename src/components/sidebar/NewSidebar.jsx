import React from 'react'
import '../sidebar/NewSidebar.css'

const NewSidebar = () => {
  return (
    <div className='container'>
      <div className="sidebar">
        <div className="header">
          <div className="list-item">
            <a href='#'>
              <img src='' alt=''/>
              <span>Header</span>
            </a>
          </div>
        </div>
        <div className="illustration">
          <img src={require('../../assets/images/Logo/Logo.png')} alt='logo' />
        </div>
      </div>
    </div>

  )
}

export default NewSidebar