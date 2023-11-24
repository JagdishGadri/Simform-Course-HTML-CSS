import React from 'react'
import { ReactComponent as MobileIcon } from '../../Assets/Graphic.svg'
import { ReactComponent as FeatureIcon1 } from '../../Assets/Icon.svg'
import { ReactComponent as FeatureIcon2 } from '../../Assets/Icon (1).svg'
import { ReactComponent as FeatureIcon3 } from '../../Assets/Icon (2).svg'


import './HomePage.scss'
import { Button } from 'antd'
import FeatureItem from '../featureItem/FeatureItem'
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
        <div type='primary' className='home-page-wrapper'>
            <div className='feature-text'>
                <p className='link-text feature-title'>Auto Adaptive layouts</p>
                <span className='section-title'>Responsive DNA<span className='section-title-last-letter'>.</span></span>
                <p className='gray-text feature-decription'>Easily creates truly responsive components  while deploying production-ready code.</p>
                {featuresListData.map((item) => {
                    return <FeatureItem title={item.title} icon={item.icon} />
                })}
            </div>
            <div className='feature-svg'> <MobileIcon /></div>
        </div>
    )
}

export default HomePage