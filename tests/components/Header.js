import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router'

describe('Header', () => {
	let Header
	let routes
	let header

	beforeEach(() => {
		routes = {}
		Header = require('inject?config/routes!components/Header/Header')({ // eslint-disable-line global-require
			'config/routes': routes,
		}).default

		header = shallow(<Header />)
	})

	it('should return a <header> element', () => {
		expect(header.type()).toBe('header')
	})

	it('should render an empty list', () => {
		expect(header.find('ul').length).toBe(1)
		expect(header.find('li').length).toBe(0)
	})

	describe('with routes', () => {
		beforeEach(() => {
			routes = {
				aplace: {
					path: '/aplace',
					name: 'a place',
				},
			}
			Header = require('inject?config/routes!components/Header/Header')({ // eslint-disable-line global-require
				'config/routes': routes,
			}).default

			header = shallow(<Header />)
		})

		it('should make a list item for each route', () => {
			expect(header.find('li').length).toBe(1)
		})

		it('should make a link for each route', () => {
			expect(header.find(Link).length).toBe(1)
			expect(header.find(Link).prop('to')).toBe('/aplace')
		})
	})
})
