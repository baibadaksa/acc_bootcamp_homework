import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import './index.css';
import App from './components/AppComponent';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
