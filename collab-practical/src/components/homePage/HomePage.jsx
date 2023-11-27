import React from 'react'
import { ReactComponent as MobileIcon } from '../../Assets/Graphic.svg'
import { ReactComponent as FeatureIcon1 } from '../../Assets/Icon.svg'
import { ReactComponent as FeatureIcon2 } from '../../Assets/Icon (1).svg'
import { ReactComponent as FeatureIcon3 } from '../../Assets/Icon (2).svg'
import { ReactComponent as PinkCircle } from '../../Assets/Ellipse 753.svg'



import './HomePage.scss'
import { Button } from 'antd'
import FeatureItem from '../featureItem/FeatureItem'
import SolidCircle from '../../Assets/SolidCircle'
const HomePage = () => {
    const featuresListData = [{
        icon: <FeatureIcon1 />,
        title: 'Advanced pricing'
    },
    {
        icon: <FeatureIcon2 />,

        title: 'Relative positioning with containers'
    },
    {
        icon: <FeatureIcon3 />,

        title: 'Percentage-based geometry'
    }
    ]
    return (
        <>
            {/* <div className='home-page-wrapper'>
                <div className='feature-text'>
                    <p className='link-text feature-title'>Auto Adaptive layouts</p>
                    <span className='section-title'>Responsive DNA<span className='section-title-last-letter'>.</span></span>
                    <p className='gray-text feature-decription'>Easily creates truly responsive components  while deploying production-ready code.</p>
                    {featuresListData.map((item) => {
                        return <FeatureItem title={item.title} icon={item.icon} />
                    })}
                </div>
                <div className='feature-svg'> <MobileIcon /></div>
            </div> */}

            <div className='prototype-wrapper '>
                <div className='prototype-text'>
                    <span className='section-title'>Native-like Prototying<span className='section-title-last-letter'>.</span></span>
                    <p className=' prototype-decription'>With Collab Smart Prototype you create your interactions and animations once and store as presets in the cloud for future use.</p>
                    <p className=' prototype-decription'>Use the Collab App to test in real-time.</p>
                    <Button type='primary' className='primary-button'>See Sample Prototype</Button>
                </div>
                <div className='pink-circle-1'> <SolidCircle color='#FAB8C4' radius={35} /></div>
                <div className='pink-circle-2'> <SolidCircle color='#FAB8C4' radius={12} /></div>
                <div className='blue-circle'> <SolidCircle color='#5956E9' radius={45} /></div>
                <div className='yellow-circle'> <SolidCircle color='#FFDC60' radius={65} /></div>


            </div>

        </>
    )
}

export default HomePage