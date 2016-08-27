import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

const AppContainer = ({ history, routes, store }) => (
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>
)

AppContainer.propTypes = {
	history: PropTypes.object.isRequired,
	routes: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
}

export default AppContainer
