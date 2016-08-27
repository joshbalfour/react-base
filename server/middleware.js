import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from 'routes'
import configureStore from 'store'
import { Provider } from 'react-redux'
import htmlTemplate from './template'

const fetchAllData = (renderProps, store) => {
	const { location, params } = renderProps
	const queries = []

	renderProps.components.forEach(component => {
		if (component) {
			let fetchData
			if (typeof component.fetchData === 'function') {
				fetchData = component.fetchData
			} else if (component.WrappedComponent && typeof component.WrappedComponent.fetchData === 'function') {
				fetchData = component.WrappedComponent.fetchData
			}

			if (fetchData) {
				queries.push(
					new Promise((resolve) => {
						resolve(fetchData({ params, query: location.query, store }))
					})
				)
			}
		}
	})

	return Promise.all(queries)
}

const configureHistoryAndStore = (url, initialState) => {
	const memoryHistory = createMemoryHistory(url)
	let store = configureStore(memoryHistory, initialState)
	const history = syncHistoryWithStore(memoryHistory, store)
	const state = store.getState()
	store = configureStore(memoryHistory, state)

	return { store, history }
}

const renderHTML = (store, renderProps, url, userAgent) => {
	const reactHTML = renderToString(
		<Provider store={store}>
			<RouterContext {...renderProps} />
		</Provider>
	)

	return htmlTemplate(reactHTML, store.getState(), url, userAgent)
}

/* eslint-disable no-param-reassign */
function *renderApp() {
	const { history, store } = configureHistoryAndStore(this.request.url)

	yield new Promise((resolve, reject) => {
		match({ history, routes, location: this.request.url }, (error, redirectLocation, renderProps) => {
			if (error) {
				reject(error)
			} else if (redirectLocation) {
				this.redirect(302, redirectLocation.pathname + redirectLocation.search)
			} else if (renderProps) {
				fetchAllData(renderProps, store).then(() => {
					this.status = 200
					this.body = renderHTML(store, renderProps, this.request.url, this.req.headers['user-agent'])
					resolve()
				}).catch(error => {
					reject(error)
				})
			} else {
				const error = new Error('unable to match request to a route')
				error.status = 404
				reject(error)
			}
		})
	})
}

module.exports = { renderApp }
