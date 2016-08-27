import React from 'react'
import { Route, IndexRoute } from 'react-router'
import routes from 'config/routes'
import MainLayout from 'layouts/MainLayout'
import Home from './Home'
import View2 from './View2'

export default (
	<Route path={routes.index.path} component={MainLayout}>
		<IndexRoute component={Home} />
		<Route path={routes.view2.path} component={View2} />
	</Route>
)
