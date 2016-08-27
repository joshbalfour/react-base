import Koa from 'koa'
import koaStatic from 'koa-static'
import path from 'path'
import logger from 'utils/logger'
import { renderApp } from './middleware'

const app = new Koa()
/* eslint-disable no-param-reassign */
app.use(function *errorHandler(next) {
	try {
		yield next
	} catch (err) {
		logger(err)
		this.status = err.status || 500
		this.body = JSON.stringify({ ...err })
	}
})

const publicDir = path.resolve('dist', 'public')

app.use(koaStatic(publicDir))

app.use(renderApp)

const port = 3000

app.listen(port, () => {
	logger(`==> 👍  Koa Server is listening on port ${port}`)
})
