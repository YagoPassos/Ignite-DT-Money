import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import NewTransactionModal from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {

  const [isNewTrasactionModelOpen, setIsNewTrasactionModelOpen ] = useState(false);

  function handleOpenNewTrasactionModelOpen(){
      setIsNewTrasactionModelOpen(true)
  }
  function handleCloseNewTrasactionModelOpen(){
    setIsNewTrasactionModelOpen(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTrasactionModelOpen={handleOpenNewTrasactionModelOpen} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTrasactionModelOpen} onRequestClose={handleCloseNewTrasactionModelOpen}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}
