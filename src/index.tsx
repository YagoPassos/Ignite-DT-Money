import React from 'react';
import {createServer} from 'miragejs'
import ReactDOM from 'react-dom/client';
import { App } from './App';


createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=> {
      return [
        {
          id:1,
          title: 'transaction',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()

        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
