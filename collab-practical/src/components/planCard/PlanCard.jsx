import React from 'react'
import { Button } from 'antd'
import './PlanCard.scss'
import { ReactComponent as ListIcon1 } from '../../Assets/Box#3.svg'
import { ReactComponent as ListIcon2 } from '../../Assets/Box#3 (1).svg'

import { ReactComponent as SmileIcon1 } from '../../Assets/Smile.svg'
import { ReactComponent as SmileIcon2 } from '../../Assets/Smile (1).svg'
import { ReactComponent as StarIcon } from '../../Assets/Star icon.svg'



function PlanCard({ cardData }) {
    console.log(cardData)
    return (
        <div className={`plan-card-wrapper  ${cardData.isHighlighted ? 'plan-card-wrapper-highlighted ' : ''} `} >
            {cardData.isHighlighted && <div className='star-icon'><StarIcon /></div>}
            <span className='card-user-group list-item'>{cardData.isHighlighted ? <SmileIcon1 /> : <SmileIcon2 />}{cardData.userGroup}</span>
            <span className='card-title'> {cardData.title}</span>
            <div className='list-item list-item-centered'><p className='card-price'>{cardData.price}</p><p className='gray-text'>/month</p></div>
            {cardData?.featureList?.map((item) => {
                return <>
                    <div className={`list-item plan-feature-item ${cardData.isHighlighted ? ' ' : 'gray-text'}`}>
                        <div>{cardData?.isHighlighted ? <ListIcon2 /> : <ListIcon1 />}</div>{item}</div>
                </>
            })}
            <Button className={`primary-button button-${cardData.buttonColor}`}>Try free for 30 days</Button>

        </div >

    )
}

export default PlanCard