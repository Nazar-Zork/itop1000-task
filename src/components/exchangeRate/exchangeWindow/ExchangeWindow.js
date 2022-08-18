import React from 'react';
import styles from './ExchangeWindow.module.css';


const ExchangeWindow = (props) => {

  return (
          <div className={styles.exchangeWindow}>
            <p className={styles.exchangeWindow__text}>
              {
                props.windowName.includes("iHaveInput")?'I have':'I will get'
              }
            </p>
            <div className={styles.exchangeWindow__form}>
              <input className={styles.exchangeWindow__input}
                     value={props.windowName.includes("iHaveInput")?props.formSetings.iHaveInput:props.formSetings.iWillGetInput}
                     onChange={props.onChangeHandler}
                     name={props.windowName[0]}
                     type="number"/>
              <select className={styles.exchangeWindow__select} 
                      value={props.windowName.includes("iHaveInput")?props.formSetings.iHaveSelect:props.formSetings.iWillGetSelect}
                      onChange={props.onChangeHandler}
                      name={props.windowName[1]}>
                <option>UAH</option>
                {
                  props.apiRateData.map((item, id) =>{
                    return(<option key={id}>{item.cc}</option>)
                  }) 
                }
              </select>
            </div>
          </div>
  );
}

export default ExchangeWindow;
