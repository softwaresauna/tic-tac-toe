import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gui from './gui/Gui';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Gui />, document.getElementById('root'));
registerServiceWorker();
