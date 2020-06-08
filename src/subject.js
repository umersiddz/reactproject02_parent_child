import React from 'react';

function Subject(props) {
    return (
        <div>   
            <h1> Today's Temeprature is {props.dayTemperature} </h1>
            <h1> And the condition is {props.dayWeather} </h1>
                   
        </div>
    );
}

export default Subject;
