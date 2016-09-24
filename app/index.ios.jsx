import React from 'react'
import { AppRegistry } from 'react-native'
import scenes from 'scenes'
import AppContainer from 'containers/AppContainer'
import configureStore from 'store'

const store = configureStore(null, {})

const ReactBase = () => (
	<AppContainer
		scenes={scenes}
		store={store}
	/>
)

AppRegistry.registerComponent('ReactBase', () => ReactBase)
