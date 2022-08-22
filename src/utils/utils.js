export const roundingNumber = (number) =>{
    return Math.round(parseFloat(number) * 100) / 100;
  }

export const trueNumber = (numb) =>{
  return numb <= 0 ? 1 : numb;
}

export const reformObject = (data)=>{
  let courseObject = {'UAH': 1,};
  data.forEach((item) =>{
    courseObject[item.cc] = item.rate;
  })
  return courseObject
}