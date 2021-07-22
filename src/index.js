import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // можно вместо browserrouter обернуть приложение HashRouter, и тогда адрес будет сокращен, опставится хеш и в гите будет работать
  // ВОТ ЭТО УДАЛИЛ ИЗ КОМПАНЕНТА БРАЙЗЕРРОУТЕР !!!! ЭТО ДЛЯ ГИТА!!! basename={process.env.PUBLIC_URL}
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
