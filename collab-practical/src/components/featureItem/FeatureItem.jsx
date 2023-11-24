import React from 'react'
import './FeatureItem.scss'
function FeatureItem({ title, icon }) {
    return (
        <div className='feature-item' >
            <div >{icon}</div>
            <p className='item-title'> {title}</p>
        </div >
    )
}

export default FeatureItem