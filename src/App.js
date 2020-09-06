import React, { Component, Suspense } from 'react';
import MainTheme from './components/themes/mainTheme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './services/userSession';
import './i18n'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={null}>
            <MainTheme />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
