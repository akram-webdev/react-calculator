import React, { useEffect, useRef } from 'react';
import { BUTTONS } from './BtnConfig';
import './Calculator.css';

const Calculator = () => {

    const btnsRef = useRef(null);
    const expRef = useRef(null);

    useEffect(() => {
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));

        btns.forEach(e => e.style.height = e.offsetWidth + 'px')
     
    }, [])
    


    return (
        <div className='calculator'>
            <div className='calculator__result'>
                <div ref={expRef} className="calculator__result__exp">
                    11212122
                </div>
                <div className="calculator__result__exp"></div>
            </div>
            <div ref={btnsRef} className="calculator__btns">
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