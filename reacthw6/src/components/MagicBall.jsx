import React , {useState} from 'react';
import predictions from './predictions.js';
import Prediction from './Prediction';

const MagicBall = () => {

    const [сurrentPrediction, setCurrentPrediction] = useState("");

    const getRandomPrediction = () =>{
        setCurrentPrediction(predictions[ Math.floor(Math.random() * predictions.length)]);
        console.log(predictions[Math.random() * 7]);
        return predictions[Math.random() * 7];
    }

    return (
        <div className='container'>
            <button className="randomButton" onClick={getRandomPrediction}>Задати питання</button>
            <Prediction prediction={сurrentPrediction}/>
        </div>
    );
}

export default MagicBall;
