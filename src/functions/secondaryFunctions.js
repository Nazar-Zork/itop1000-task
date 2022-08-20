import { useState, useEffect } from 'react';

// export const useGetApi = () =>{
//     const [requestData, setRequestData] = useState({
//       isLoading: true,
//       data:[],
//       error: null
//     });
//     useEffect(() =>{
//       fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
//         .then(res => res.json())
//         .then(
//           (result) =>{
//             setRequestData({
//               isLoading: false,
//               data: result,
//               error:false
//             })
//           },
//           (error) =>{
//             setRequestData({
//               isLoading: true,
//               error:error
//             })
//           }
//         )
//     }, []);
//     return requestData;
//   }
  

export const useGetApi = () =>{
    const [requestData, setRequestData] = useState({
      isLoading: true,
      data:[],
      error: null
    });
    useEffect(() =>{
      fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(res => res.json())
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


// export const getCurrencyPrice = (data) =>{
//     let courseObject = {'UAH': 1,};
//     data.forEach((item) =>{
//       courseObject[item.cc] = item.rate;
//     })
//     return courseObject;
//   } 

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