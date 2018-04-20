import React from 'react'

export const Footer = () => {
    return (
        <div >
            <p>this is the footer component</p>
            <div className='identity'>
                <p>© {(new Date().getFullYear())}</p>
            </div>
        </div>
    )
}