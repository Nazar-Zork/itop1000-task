
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetApi = () =>{
    const [requestData, setRequestData] = useState({
      isLoading: true,
      data:[],
      error: null
    });
    useEffect(() =>{
      axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(res => res.data)
        .then(
          (result) =>{
            let courseObject = {'UAH': 1,};
            result.forEach((item) =>{
              courseObject[item.cc] = item.rate;
            })
            setRequestData({
              isLoading: false,
              data: courseObject,
              error:false
            })
          },
          (error) =>{
            setRequestData({
              isLoading: true,
              error:error
            })
          }
        )
    }, []);
    return requestData;
  }