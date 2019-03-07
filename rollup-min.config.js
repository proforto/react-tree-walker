const { uglify } = require('rollup-plugin-uglify')
const packageJson = require('./package.json')

const baseConfig = require('./rollup.config.js')

const packageName = packageJson.name.replace(/@proforto\//, '')

baseConfig.plugins.push(uglify())
baseConfig.output.file = `dist/${packageName}.min.js`

module.exports = baseConfig
