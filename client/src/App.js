import React, {useContext, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'


function App({product}) {

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header/>
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
