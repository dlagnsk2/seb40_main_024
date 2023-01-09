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

// const DeviceSizes = {
//   mobileWidth: '320px',
//   tabletWidth: '768px',
//   laptopWidth: '1024px',
// };

// const Device = {
//   mobileWidth: `screen and (max-width: ${DeviceSizes.mobileWidth})`,
//   tabletWidth: `screen and (max-width: ${DeviceSizes.tabletWidth})`,
//   laptopWidth: `screen and (max-width: ${DeviceSizes.laptopWidth})`,
// };

// const theme = {
//   Device,
// };

// const Div = styled.div`
//   @media ${({ theme }) => theme.Device.tabletWidth} {
//     flex-direction: column;
//     background-color: red;
//     margin-top: 300px;
//     max-width: ${DeviceSizes.tabletWidth};
//     width: 100%;
//     height: 1000px;
//     z-index: -99999999;
//   }

//   @media ${({ theme }) => theme.Device.mobileWidth} {
//     flex-direction: column;
//     background-color: yellow;
//     max-width: ${DeviceSizes.mobilewidth};
//     margin-top: 300px;
//     width: 100%;
//     height: 1000px;
//     z-index: -999999;
//   }
// `;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AuthContextProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </AuthContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);
