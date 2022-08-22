import React, { useState } from 'react';
import styles from './ExchangeRate.module.css';
import ExchangeWindow from './ExchangeWindow/ExchangeWindow';

import {roundingNumber} from '../../utils/utils'


const ExchangeRate = ({ courseRate }) => {
  const currenciesNames = Object.keys(courseRate);

  const [iHaveInput, setIHaveInput] = useState(1);
  const [iHaveSelect, setIHaveSelect] = useState('UAH');
  const [iWillGetInput, setIWillGetInput] = useState(1);
  const [iWillGetSelect, setIWillGetSelect] = useState('UAH');

  const iHaveInputHandler = (iHaveAmount)=>{
    setIWillGetInput(roundingNumber(iHaveAmount*courseRate[iHaveSelect]/courseRate[iWillGetSelect]));
    setIHaveInput(iHaveAmount)
  }

  const iHaveSelectHandler = (iHaveCurrency)=>{
    setIWillGetInput(roundingNumber(iHaveInput*courseRate[iHaveCurrency]/courseRate[iWillGetSelect]));
    setIHaveSelect(iHaveCurrency)
  }

  const iWillGetInputHandler = (iWillGetAmount)=>{
    setIHaveInput(roundingNumber(iWillGetAmount*courseRate[iWillGetSelect]/courseRate[iHaveSelect]));
    setIWillGetInput(iWillGetAmount)
  }
  const iWillGetSelectHandler = (iWillGetCurrency)=>{
    setIHaveInput(roundingNumber(iWillGetInput*courseRate[iWillGetCurrency]/courseRate[iHaveSelect]));
    setIWillGetSelect(iWillGetCurrency)
  }

  return (
    <div className={styles.exchange}>
        <div className={styles.exchange__inner}>
          <ExchangeWindow
              apiCurrencyNames={currenciesNames}
              inputValue={iHaveInput}
              selectValue={iHaveSelect}
              inputHandler={iHaveInputHandler}
              selectHandler={iHaveSelectHandler}
              windowName={'iHave'}/>
          <ExchangeWindow 
              apiCurrencyNames={currenciesNames}
              inputValue={iWillGetInput}
              selectValue={iWillGetSelect}
              inputHandler={iWillGetInputHandler}
              selectHandler={iWillGetSelectHandler}
              windowName={'iWillGet'}/>
        </div>
    </div>
  );
}

export default ExchangeRate;
