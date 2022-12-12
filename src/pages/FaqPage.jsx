import React from 'react'
import NavbarTop from '../components/NavbarTop'
import NewSidebar from '../components/sidebar/NewSidebar'

const FaqPage = () => {
    return (
        <div className="d-flex">
            <NewSidebar />
            <div className="w-100">
                <NavbarTop />
                <div className="mt-4 ps-3 pe-3 w-100">
                </div>
            </div>
        </div>
    )
}

export default FaqPage