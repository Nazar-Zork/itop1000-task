import React, { useState } from 'react';
import styles from './ExchangeRate.module.css';
import ExchangeWindow from './exchangeWindow/ExchangeWindow';

import {roundingNumber, trueNumber} from '../../functions/secondaryFunctions'




const ExchangeRate = (props) => {

  const[formSettings, setFormSettings] = useState({
    iHaveInput: 1,
    iHaveSelect: 'UAH',
    iWillGetInput: 1,
    iWillGetSelect: 'UAH'
  });

  const onChangeHandler = (event) =>{

    event.target.value = trueNumber(event.target.value, event.target.name);

    setFormSettings((prev) =>{
      switch(event.target.name){
        case 'iHaveInput':
          return({...prev,
            [event.target.name]: event.target.value,
            iWillGetInput:roundingNumber(event.target.value * props.data[prev.iHaveSelect]/props.data[prev.iWillGetSelect])
          })
        case 'iWillGetInput':
          return({...prev,
            [event.target.name]: event.target.value,
            iHaveInput: roundingNumber(event.target.value * props.data[prev.iWillGetSelect]/props.data[prev.iHaveSelect])
          })
        case 'iHaveSelect':
          return({...prev,
            [event.target.name]: event.target.value,
            iWillGetInput: roundingNumber(prev.iHaveInput * props.data[event.target.value]/props.data[prev.iWillGetSelect])
          })
        case 'iWillGetSelect':
          return({...prev,
            [event.target.name]: event.target.value,
            iHaveInput: roundingNumber(prev.iWillGetInput * props.data[event.target.value]/props.data[prev.iHaveSelect])
          })
        default:
          return({
            ...prev
          })
      }
    })
  }
  return (
    <div className={styles.exchange}>
        <div className={styles.exchange__inner}>
          <ExchangeWindow apiRateData={Object.keys(props.data)} formSetings={formSettings} onChangeHandler={onChangeHandler} windowName={['iHaveInput','iHaveSelect']}/>
          <ExchangeWindow apiRateData={Object.keys(props.data)} formSetings={formSettings} onChangeHandler={onChangeHandler} windowName={['iWillGetInput','iWillGetSelect']}/>
        </div>
    </div>
  );
}

export default ExchangeRate;
