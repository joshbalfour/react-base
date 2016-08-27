import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from './Home'

export default (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Home} />
	</Route>
)
