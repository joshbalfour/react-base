import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from 'reducers'

export default (history, initialState, routerReducer) => {
	const middleware = [
		thunk,
	]

	if (__DEV__ && __CLIENT__) {
		middleware.push(logger())
	}
	let rr = {}
	if (routerReducer) {
		rr = { routing: routerReducer }
	}

	const store = createStore(
		combineReducers(Object.assign({}, reducers, rr)),
		initialState,
		applyMiddleware(...middleware)
	)

	return store
}
