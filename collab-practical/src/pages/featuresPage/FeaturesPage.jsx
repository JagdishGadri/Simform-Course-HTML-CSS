import React from 'react'
import { featuresListData } from '../../utils/constants'
import MobileIcon from '../../Assets/Graphic.svg'
import './FeaturesPage.scss'
import FeatureItem from '../../components/featureItem/FeatureItem'

const FeaturesPage = () => {
    return (
        <div className='feature-page-wrapper'>
            <div className='feature-text'>
                <p className='link-text bold-text'>Auto Adaptive layouts</p>
                <span className='section-title '>Responsive DNA<span className='section-title-last-letter'>.</span></span>
                <p className='gray-text feature-description'>Easily creates truly responsive components  while deploying production-ready code.</p>
                {featuresListData.map((item) => {
                    return <FeatureItem title={item.title} icon={item.icon} />
                })}
            </div>
            <div className='feature-svg'> <img src={MobileIcon} alt='feature-svg' /></div>
        </div>
    )
}

export default FeaturesPage