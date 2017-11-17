import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux'
import App from './containers/App'

const initialState = {}

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
