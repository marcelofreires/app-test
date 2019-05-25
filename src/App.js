import React from 'react';
import './App.scss';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <main className="App">

      <div className="container">
        <CustomerList />
      </div>
    </main>
  );
}

export default App;
