import React from 'react'
import SolidCircle from '../../Assets/SolidCircle'
import { Button } from 'antd'
import './PrototypePage.scss'

const PrototypePage = () => {
    return (
        <div className='prototype-wrapper'>
            <div className='prototype-bg-img '>
                <div className='prototype-text'>
                    <span className='section-title'>Native-like Prototying<span className='section-title-last-letter'>.</span></span>
                    <p className=' prototype-decription'>With Collab Smart Prototype you create your interactions and animations once and store as presets in the cloud for future use.</p>
                    <p className=' prototype-decription'>Use the Collab App to test in real-time.</p>
                    <Button type='primary' className='primary-button'>See Sample Prototype</Button>
                </div>
                <div className='pink-circle-1'> <SolidCircle color='#FAB8C4' radius={35} /></div>
                <div className='pink-circle-2'> <SolidCircle color='#FAB8C4' radius={12} /></div>
                <div className='blue-circle'> <SolidCircle color='#5956E9' radius={45} /></div>
            </div>
        </div>

    )
}

export default PrototypePage