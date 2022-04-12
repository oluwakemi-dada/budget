import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
