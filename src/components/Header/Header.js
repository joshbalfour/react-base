import React from 'react'
import routes from 'config/routes'
import { Link } from 'react-router'
import css from './Header.css'

export default () => (
	<header>
		<ul className={css.menu}>
			{Object.keys(routes).map(route => <li key={route} className={css.item}><Link to={routes[route].path}>{routes[route].name}</Link></li>)}
		</ul>
	</header>
)
