import React from 'react'
import { AppRegistry } from 'react-native'
import routes from 'routes'
import AppContainer from 'containers/AppContainer'
import configureStore from 'store'

const store = configureStore(null, {})

const ReactBase = () => (
	<AppContainer
		routes={routes}
		store={store}
	/>
)

AppRegistry.registerComponent('ReactBase', () => ReactBase)
