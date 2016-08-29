import React, { PropTypes } from 'react'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import { View } from 'react-native'

const AppContainer = ({ routes, store }) => (
	<Provider store={store}>
		<View style={{ flex: 1 }}>
			<Router>
				{routes}
			</Router>
		</View>
	</Provider>
)

AppContainer.propTypes = {
	routes: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
}

export default AppContainer
