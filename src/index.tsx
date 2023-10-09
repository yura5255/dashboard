import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthUser } from "./store/action-creators/userActions";
import { getAccessToken } from "./services/api-user-service";

const token = getAccessToken();
if (token) {
  AuthUser(token, "Data loaded from lockalStorrage", store.dispatch);
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <ToastContainer autoClose={5000} />
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
