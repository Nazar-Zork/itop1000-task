import Header from "./components/header/Header"
import ExchangeRate from "./components/exchangeRate/ExchangeRate";
import Footer from "./components/footer/Footer";
import './App.css';

import {useGetApi, getCurrencyPrice, roundingNumber} from './functions/secondaryFunctions'

const App = (props) => {
  const requestData = useGetApi();
  const dataExchangeRate = getCurrencyPrice(requestData.data);
 
  const headerCourse = {
    usd:roundingNumber(dataExchangeRate.USD),
    eur:roundingNumber(dataExchangeRate.EUR)
  };
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
        <ExchangeRate data={requestData.data} dataExchangeRate={dataExchangeRate}/>
        <Footer />
      </div>
    )
  }

}

export default App;
