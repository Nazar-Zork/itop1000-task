import Header from "./components/header/Header"
import ExchangeRate from "./components/exchangeRate/ExchangeRate";
import Footer from "./components/footer/Footer";
import './App.css';

import {useGetApi, getCurrencyPrice, roundingNumber} from './functions/secondaryFunctions'

const App = (props) => {
  const data =  useGetApi();
  const dataExchangeRate = getCurrencyPrice(data);
 
  const headerCourse = {
    usd:roundingNumber(dataExchangeRate.USD),
    eur:roundingNumber(dataExchangeRate.EUR)
  };

  return (
    <div className="App">
      <Header headerCourse={headerCourse}/>
      <ExchangeRate data={data} dataExchangeRate={dataExchangeRate}/>
      <Footer />
    </div>
  );
}

export default App;
