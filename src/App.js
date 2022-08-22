import Header from "./components/Header/Header"
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import Footer from "./components/Footer/Footer";
import './App.css';
import {roundingNumber} from './utils/utils'
import {useGetApi} from './hooks/hooks'

const App = () => {
  const {isLoading, data, error} = useGetApi();
  let [usd, eur] = [roundingNumber(data.USD), roundingNumber(data.EUR)];
  
  if(error){
    return<div className="App">Error:{error}</div>
  } 
  if(isLoading){
    return <div className="App">Loading...</div> 
  }
  return (
    <div className="App">
      <Header usd={usd} eur={eur}/>
      <ExchangeRate courseRate={data}/>
      <Footer />
    </div>
  );
};

export default App;
