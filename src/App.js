import Header from "./components/header/Header"
import ExchangeRate from "./components/exchangeRate/ExchangeRate";
import Footer from "./components/footer/Footer";
import './App.css';

import {useGetApi, roundingNumber} from './functions/secondaryFunctions'
import { useMemo } from "react";

const App = (props) => {
  const requestData = useGetApi();
 
  const headerCourse = useMemo(()=>{
      let usd = roundingNumber(requestData.data.USD);
      let eur = roundingNumber(requestData.data.EUR);
      return{usd,eur}
    },[requestData.data.USD, requestData.data.EUR]);
  
  if(requestData.error){
    return(
      <div className="App">
        Error:{requestData.error}
      </div>
    )
  }else if(requestData.isLoading){
    return(
      <div className="App">
        Loading...
      </div>
    )    
  }else{
    return (
      <div className="App">
        <Header headerCourse={headerCourse}/>
        <ExchangeRate data={requestData.data}/>
        <Footer />
      </div>
    )
  }

}

export default App;
