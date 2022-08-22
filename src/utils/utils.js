export const roundingNumber = (number) =>{
    return Math.round(parseFloat(number) * 100) / 100;
  }

export const trueNumber = (numb) =>{
  return numb <= 0 ? 1 : numb;
}
