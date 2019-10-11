import React from 'react';

import './App.css';
import Header from './Component/Header/Header'
import Dashboard from './Component/Dashboard/Dashboard'
import Product from './Component/Product/Product'
import Form from './Component/Form/Form'

class App extends React.Component {



  render() {
   return (
     <div className="App">
       <Header />
        <Dashboard />
        <Product />
       <Form />

    </div>
  );
}
}

export default App;
