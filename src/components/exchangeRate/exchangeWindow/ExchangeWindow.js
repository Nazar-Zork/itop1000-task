import React from 'react';
import styles from './ExchangeWindow.module.css';
import { trueNumber } from '../../../utils/utils';

const [iHave, inputType] = ["iHave","number"];

const ExchangeWindow = ({apiCurrencyNames, inputValue, selectValue, inputHandler, selectHandler, windowName}) => {
  const exchangeWindowText = windowName === iHave ? 'I have' : 'I will get';

  const onChangeInput = (e) =>{
    inputHandler(trueNumber(e.target.value));
  }
  const onChangeSelect = (e) =>{
    selectHandler(e.target.value)
  }

  return (
          <div className={styles.exchangeWindow}>
            <p className={styles.exchangeWindow__text}>
              {exchangeWindowText}
            </p>
            <div className={styles.exchangeWindow__form}>
              <input className={styles.exchangeWindow__input}
                     value={inputValue}
                     onChange={onChangeInput}
                     type={inputType}/>
              <select className={styles.exchangeWindow__select} 
                      value={selectValue}
                      onChange={onChangeSelect}>
                {
                  apiCurrencyNames.map((item, id) =>{
                    return(<option key={id}>{item}</option>)
                  }) 
                }
              </select>
            </div>
          </div>
  );
}

export default ExchangeWindow;
