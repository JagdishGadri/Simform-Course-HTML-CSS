import React from 'react'
import './ObjectiveItem.scss'

function ObjectiveItem({ objectiveItem }) {
    return (
        <div className={`objective-item-wrapper ${objectiveItem.isHighlighted ? 'objective-item-wrapper-highlighted' : ''} `} >
            <div><img className='objective-icon' src={objectiveItem.iconSrc} alt="icon" /></div>
            <div className='objective-details-container'>
                <p className='bold-text objective-title'> {objectiveItem.title}</p>
                <p className='gray-text'>{objectiveItem.desc}</p>
                <p className='expand-text bold-text'>{objectiveItem.expandText}{' >'}</p>
            </div>
        </div >

    )
}

export default ObjectiveItem