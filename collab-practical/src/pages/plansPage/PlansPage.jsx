import React, { useState } from 'react'
import PlanCard from '../../components/planCard/PlanCard'
import './PlansPage.scss'
import { Switch } from 'antd'
import { plansCardData } from '../../utils/constants'

const PlansPage = () => {
    const [isBilledYearly, setIsBilledYearly] = useState(true)

    return (
        <div className='plans-page-wrapper '>
            <h2>Join The Revolution</h2>
            <span className='section-title plans-page-title'>Find the <span className='section-title-last-letter'>Right Plan.</span></span>
            <p className='gray-text feature-description  '>Flexible pricing options for freelancers and design teams.</p>
            <div>
                <span className={`feature-description ${isBilledYearly ? 'gray-text' : 'link-text'}`}>Billed monthly </span>
                <Switch defaultChecked={true} onChange={setIsBilledYearly} />
                <span className={`feature-description ${isBilledYearly ? 'link-text' : 'gray-text'}`}> Billed yearly</span>
            </div>
            <div className='plan-cards-wrapper'>
                {plansCardData?.map((item) => {
                    return <PlanCard cardData={item} />
                })}
            </div>
        </div>
    )
}

export default PlansPage