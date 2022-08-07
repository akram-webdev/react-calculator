import React from 'react';
import { BUTTONS } from './BtnConfig';
import './Calculator.css';

const Calculator = () => {
    return (
        <div className='calculator'>
            <div className='calculator__result'>
                <div className="calculator__result__exp"></div>
            </div>
            <div className="calculator__btns">
                {
                    BUTTONS.map((item, index) =>(
                        <button key={index} className={item.class}>
                            {item.display}

                        </button>
                    ))
                }
            </div>

           
        </div>
    );
};

export default Calculator;