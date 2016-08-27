import transit from 'transit-immutable-js'
import fs from 'fs'
import path from 'path'

const manifest = JSON.parse(fs.readFileSync(path.resolve('dist', 'public', 'manifest.json')))
if (!Object.keys(manifest).length || !manifest['main.js'] || !manifest['main.css']) {
	throw new Error('asset manifest empty')
}

const cssUrl = manifest['main.css']
const jsUrl = manifest['main.js']

const htmlTemplate = (
	reactHTML = '',
	initialState = {},
) => {
	const template = `
		<!doctype html>
		<html lang="en-us">
			<head>
				<script type="text/javascript">
					window.__initialState__ = ${JSON.stringify(transit.toJSON(initialState))}
				</script>
				<link href="https://fonts.googleapis.com/css?family=Lato:400,700,300italic,400italic" rel="stylesheet" type="text/css">
				<link rel="stylesheet" href="${cssUrl}" type="text/css">
			</head>
			<body>
				<div id="react-root">${reactHTML}</div>
				<script src="${jsUrl}" async></script>
			</body>
		</html>`

	return template
}

module.exports = htmlTemplate
