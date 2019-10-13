import React from 'react'

const PlayerCard =(props) => {
    return (
        <div>
            <span>{props.name} {props.country} {props.searches} </span>
        </div>
    )
}

export default PlayerCard
