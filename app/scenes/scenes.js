import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import Home from './Home'
import View2 from './View2'

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="home" component={Home} title="Home" initial />
		<Scene key="view2" component={View2} title="View2" />
	</Scene>
)

export default scenes
