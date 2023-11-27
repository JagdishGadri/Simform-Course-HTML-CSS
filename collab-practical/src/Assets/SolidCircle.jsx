import React from 'react'

const SolidCircle = ({ color, radius }) => {
    return (
        <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={radius} cy={radius} r={radius} fill={color} />
        </svg>

    )
}

export default SolidCircle