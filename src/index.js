import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StateProvider } from './store/StateProvider';
import reducer, { initialState } from './store/reducer';



const app = (
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
