import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyContextProvider from './modules/context_api/MyContextProvider';
import { Provider } from "react-redux"
import {store,persistor} from "./modules/redux_features/store"
import {PersistGate} from "redux-persist/integration/react"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <Provider store={store}>
        <PersistGate  loading={<h1>loading...</h1>} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </MyContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.lyt/CRA-vitals
reportWebVitals();
