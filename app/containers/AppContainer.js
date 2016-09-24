import React, { PropTypes } from 'react'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import { View } from 'react-native'

const AppContainer = ({ scenes, store }) => (
	<Provider store={store}>
		<View style={{ flex: 1 }}>
			<Router scenes={scenes} />
		</View>
	</Provider>
)

AppContainer.propTypes = {
	scenes: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
}

export default AppContainer
