import React, { useRef } from 'react';
import styles from './ExchangeRate.module.css';
import {roundingNumber} from '../../functions/secondaryFunctions'

const ExchangeRate = (props) => {

  const [leftInput, leftSelect, rightInput, rightSelect] = [useRef(),useRef(),useRef(),useRef()]

  const returnInputsRows = () =>{
    return({
      leftQuontity: leftInput.current.value,
      leftOption: leftSelect.current.value,
      rightQuontity: rightInput.current.value,
      rightOption: rightSelect.current.value
    })
  }
  
  const onChangeHandler = (event) =>{
    
    if(leftInput.current === event.target || rightInput.current === event.target){
      if(event.target.value <= 0){
        event.target.value = 1
      }
    }

    let rows = returnInputsRows();
    
    if(leftInput.current === event.target || leftSelect.current === event.target){
      rightInput.current.value =  roundingNumber(rows.leftQuontity * props.dataExchangeRate[rows.leftOption] / props.dataExchangeRate[rows.rightOption]);
    }else if(rightInput.current === event.target || rightSelect.current === event.target){
      leftInput.current.value =  roundingNumber(rows.rightQuontity * props.dataExchangeRate[rows.rightOption] / props.dataExchangeRate[rows.leftOption]);
    }
  }

  return (
    <div className={styles.exchange}>
        <div className={styles.exchange__inner}>
          <div className={styles.exchangeWindow}>
            <p className={styles.exchangeWindow__text}>I have:</p>
            <div className={styles.exchangeWindow__form}>
              <input className={styles.exchangeWindow__input} type="number" ref={leftInput} onChange={onChangeHandler}/>
              <select className={styles.exchangeWindow__select} ref={leftSelect} onChange={onChangeHandler}>
                <option>UAH</option>
                {
                props.data.map((item, id) =>{
                  return(<option key={id}>{item.cc}</option>)
                })
                }
              </select>
            </div>
          </div>
          <div className={styles.exchangeWindow}>
            <p className={styles.exchangeWindow__text}>I will get:</p>
            <div className={styles.exchangeWindow__form}>
              <input className={styles.exchangeWindow__input} type="number" ref={rightInput} onChange={onChangeHandler}/>
              <select className={styles.exchangeWindow__select} ref={rightSelect} onChange={onChangeHandler}>
                <option>UAH</option>
                {
                props.data.map((item, id) =>{
                  return(<option key={id}>{item.cc}</option>)
                })
                }
              </select>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ExchangeRate;
