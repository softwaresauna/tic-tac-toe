import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './gui/App';
import registerServiceWorker from './registerServiceWorker';
import {INITIAL_STATE} from "./engine/constants";
import {setInitialState} from "./gui/state-observer/subject";

setInitialState(INITIAL_STATE);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
