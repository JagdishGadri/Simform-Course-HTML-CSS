import React, { useState } from 'react'
import { ReactComponent as MobileIcon } from '../../Assets/Graphic.svg'
import { ReactComponent as PinkCircle } from "../../Assets/Ellipse 753.svg";
import LampIcon from "../../Assets/Lamp.png";

import './HomePage.scss'
import { Button, Switch } from 'antd'
import FeatureItem from '../featureItem/FeatureItem'
import SolidCircle from '../../Assets/SolidCircle'
import PlanCard from '../PlanCard/PlanCard'
import { featuresListData, objectivesListData, plansCardData } from '../../utils/constants'
import ObjectiveItem from '../objectiveItem/ObjectiveItem';
const HomePage = () => {
    const [isBilledYearly, setIsBilledYearly] = useState(true)
    console.log("isBilled", isBilledYearly)
    return (
        <>
            <div className='home-page-wrapper'>
                <div className='feature-text'>
                    <p className='link-text bold-text'>Auto Adaptive layouts</p>
                    <span className='section-title '>Responsive DNA<span className='section-title-last-letter'>.</span></span>
                    <p className='gray-text feature-decription'>Easily creates truly responsive components  while deploying production-ready code.</p>
                    {featuresListData.map((item) => {
                        return <FeatureItem title={item.title} icon={item.icon} />
                    })}
                </div>
                <div className='feature-svg'> <MobileIcon /></div>
            </div>

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


            <div className='plans-page-wrapper '>
                <h2>Join The Revolution</h2>
                <span className='section-title'>Find the <span className='section-title-last-letter'>Right Plan.</span></span>
                <p className='gray-text feature-decription'>Flexible pricing options for freelancers and design teams.</p>
                <div>
                    <span className={`feature-decription ${isBilledYearly ? 'gray-text' : 'link-text'}`}>Billed monthly </span>
                    <Switch defaultChecked={true} onChange={setIsBilledYearly} />
                    <span className={` feature-decription ${isBilledYearly ? 'link-text' : 'gray-text'}`}> Billed yearly</span>
                </div>
                <div className='plan-cards-wrapper'>
                    {plansCardData.map((item) => {
                        return <PlanCard cardData={item} />
                    })}
                </div>
            </div>


            <div className='objectives-page-wrapper'>
                <div className='objectives-description-container'>
                    <div className='objectives-description'>
                        <span className='title-small'>Effortess</span>
                        <span className='section-title title'>Go from ideation to design and done.</span>
                        <p className='gray-text title-desc'>Easily create truly responsive components while deploying production-ready code.</p>
                    </div>
                    <div className='lamp-icon'>
                        <img src={LampIcon} alt='lamp-icon' />
                    </div>
                </div>
                <div className='objective-list-wrapper'>
                    {objectivesListData?.map((item) => {
                        return <ObjectiveItem objectiveItem={item} key={item.id} />
                    })}
                </div>
            </div>

        </>
    )
}

export default HomePage