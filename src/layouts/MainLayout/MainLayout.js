import React, { PropTypes } from 'react'
import Header from 'Header'

const MainLayout = ({ children }) => (
	<div>
		<Header />
		{children}
	</div>
)

MainLayout.propTypes = {
	children: PropTypes.object.isRequired,
}

export default MainLayout
