import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gui from './Gui';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Gui />, document.getElementById('root'));
registerServiceWorker();
