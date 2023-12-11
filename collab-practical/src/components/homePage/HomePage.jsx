import React, { useState } from 'react'
import MobileIcon from '../../Assets/Graphic.svg'
import { ReactComponent as PinkCircle } from "../../Assets/Ellipse 753.svg";
import LampIcon from "../../Assets/Lamp.png";

import './HomePage.scss'
import { Button, Switch } from 'antd'
// import FeatureItem from '../featureItem/FeatureItem'
import SolidCircle from '../../Assets/SolidCircle'
import PlanCard from '../planCard/PlanCard'
import { featuresListData, objectivesListData, plansCardData } from '../../utils/constants'
import ObjectiveItem from '../objectiveItem/ObjectiveItem';
import FeaturesPage from '../../pages/featuresPage/FeaturesPage';
import PrototypePage from '../../pages/prototypePage/PrototypePage';
import PlansPage from '../../pages/plansPage/PlansPage';
import ObjectivesPage from '../../pages/objectivesPage/ObjectivesPage';
const HomePage = () => {
    const [isBilledYearly, setIsBilledYearly] = useState(true)
    return (
        <>

            <FeaturesPage />
            {/* <PrototypePage />
            <PlansPage />
            <ObjectivesPage /> */}

        </>
    )
}

export default HomePage