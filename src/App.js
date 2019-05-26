import React from 'react';

import CustomerList from './components/CustomerList';
// import AddCustomer from './components/AddCustomer';

import './App.scss';

function App() {
  return (
    <main className="App">
      {/* <AddCustomer /> */}
      
      <div className="container">
        <CustomerList />
      </div>
    </main>
  );
}

export default App;
