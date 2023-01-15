import React from 'react';
import ReactDOM from "react-dom/client";
import { createStore } from 'redux';
import reducer from './reducers/product-list-reducer'
import { Provider } from 'react-redux'; 
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(reducer); 

store.subscribe(() => 
  console.log(store.getState())
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

