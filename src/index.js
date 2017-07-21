import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import App from 'COMPONENTS/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
