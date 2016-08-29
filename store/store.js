import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from 'reducers'

export default (history, initialState, { routerMiddleware, routerReducer }) => {
	const middleware = [
		thunk,
		routerMiddleware(history),
	]

	if (__DEV__ && __CLIENT__) {
		middleware.push(logger())
	}

	const store = createStore(
		combineReducers(Object.assign({}, reducers, { routing: routerReducer })),
		initialState,
		applyMiddleware(...middleware)
	)

	return store
}
