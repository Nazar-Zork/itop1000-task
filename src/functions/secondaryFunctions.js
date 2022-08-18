import { useState, useEffect } from 'react';

export const useGetApi = () =>{
    const [data, setData] = useState([]);
    useEffect(() =>{
      const fetchData = async () => {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(res => res.json()).catch(err => console.log(err));
        setData(response);
      }
      fetchData();
    }, []);
    return data;
  }
  
export const getCurrencyPrice = (data) =>{
    let courseObject = {'UAH': 1,};
    data.forEach((item) =>{
      courseObject[item.cc] = item.rate;
    })
    return courseObject;
  } 

export const roundingNumber = (number) =>{
    return Math.round(parseFloat(number) * 100) / 100;
  }

export  const trueNumber = (numb, name) =>{
    if(name === 'iHaveInput' || name === 'iWillGetInput'){
      if(numb <= 0){
        return 1;
      }else{
        return numb;
      }
    }else{
      return numb;
    }
  }