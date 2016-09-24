import { browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'routes'
import transit from 'transit-immutable-js'
import AppContainer from 'containers/AppContainer'
import configureStore from 'store'

let initialState = window.reactAppInitialState || '{}'
initialState = transit.fromJSON(initialState)
const store = configureStore(browserHistory, initialState, routerReducer)
const history = syncHistoryWithStore(browserHistory, store, routerReducer)

const reactRootDOM = document.getElementById('react-root')

if (reactRootDOM) {
	ReactDOM.render(
		<AppContainer
			history={history}
			routes={routes}
			store={store}
		/>,
		reactRootDOM
	)
}
