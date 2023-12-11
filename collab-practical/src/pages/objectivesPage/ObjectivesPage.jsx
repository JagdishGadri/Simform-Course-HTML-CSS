import React from 'react'
import ObjectiveItem from '../../components/objectiveItem/ObjectiveItem'
import './ObjectivesPage.scss'
import LampIcon from "../../Assets/Lamp.png";
import { objectivesListData } from '../../utils/constants';

const ObjectivesPage = () => {
    return (
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
    )
}

export default ObjectivesPage