import React from 'react';

const Prediction = ({ prediction }) => {
    return (
        <div className='prediction'>
            <h1>{prediction || "Задай питання"}</h1>
        </div>
    );
};


export default Prediction;
