import { Children, createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Transaction } from '../models/Transaction';
import { api } from '../services/api';

interface TransactionsProviderProps{
    children: ReactNode;
}

type TransactionsInput = Omit<Transaction, 'id' | 'createdAt'>;
// type TransactionsInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionContextData{
    transactions: Transaction[],
    createTransaction: (transaction : TransactionsInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider( {children} : TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {

        api.get('/transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionsInput){
       const response =  await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date()
    })
       const {transaction} = response.data

       setTransactions([
           ...transactions,
           transaction,
       ])
    }

    return(
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction(){
    const context = useContext(TransactionContext);

    return context;
}