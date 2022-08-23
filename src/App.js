import './App.css';
import  { Header } from './components/Header';
import  { Balance } from './components/Balance';
import  { IncomeBudget } from './components/IncomeBudget';
import  { TransactionList } from './components/TransactionList';
import  { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider className="global">
      <Header />
      <div className='container'>
        <Balance />
        <IncomeBudget />
        <TransactionList />
        <AddTransaction />
        
    </div>
    </GlobalProvider>
  );
}

export default App;
