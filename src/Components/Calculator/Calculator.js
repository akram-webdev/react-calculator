import React, { useEffect, useRef } from 'react';
import { BTN_ACTIONS, BUTTONS } from './BtnConfig';
import './Calculator.css';

const Calculator = () => {

    const btnsRef = useRef(null);
    const expRef = useRef(null);

    useEffect(() => {
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));

        btns.forEach(e => e.style.height = e.offsetWidth + 'px')
     
    }, [])

    const btnClick = (item) =>{
        console.log(item);

        const expDiv = expRef.current;

        if (item.action === BTN_ACTIONS.THEME) document.body.classList.toggle('dark');
    }
    


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
                        <button 
                           key={index}
                           className={item.class}
                           onClick = {() => btnClick(item)}
                           >
                           


                            {item.display}
                        </button>
                    ))
                }
            </div>

           
        </div>
    );
};

export default Calculator;