
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetApi = (url) =>{
    const [requestData, setRequestData] = useState({
      isLoading: true,
      dataApi:[],
      error: null
    });
    useEffect(() =>{
      axios.get(url)
        .then(res => res.data)
        .then(
          (result) =>{
            setRequestData({
              isLoading: false,
              dataApi: result,
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