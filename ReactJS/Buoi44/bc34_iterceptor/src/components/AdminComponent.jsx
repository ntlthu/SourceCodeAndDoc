import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminComponent() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-3 text-white bg-dark'>
                    Menu
                </div>
                <div className='col-9'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
