import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from 'components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename={"/goit-react-hw-08-phonebook"}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);