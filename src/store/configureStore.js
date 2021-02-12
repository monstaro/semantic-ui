import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import mock from './slices/mockSlice';

export default function configureStore(preloadedState) {
	const middlewares = [thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const composedEnhancers = composeEnhancers(...enhancers);

	const rootReducer = combineReducers({
		mock
	});

	const store = createStore(
		rootReducer,
		preloadedState,
		composedEnhancers
	);

	return store;
}