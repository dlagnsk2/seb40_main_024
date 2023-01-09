import App from './App';
// import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/AuthContext';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </BrowserRouter>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
