import React from 'react'
import './HomePage.scss'
import FeaturesPage from '../../pages/featuresPage/FeaturesPage';
import PrototypePage from '../../pages/prototypePage/PrototypePage';
import PlansPage from '../../pages/plansPage/PlansPage';
import ObjectivesPage from '../../pages/objectivesPage/ObjectivesPage';
const HomePage = () => {
    return (
        <>
            <FeaturesPage />
            <PrototypePage />
            <PlansPage />
            <ObjectivesPage />
        </>
    )
}

export default HomePage