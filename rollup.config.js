const babel = require('rollup-plugin-babel')
const changeCase = require('change-case')
const packageJson = require('./package.json')

process.env.BABEL_ENV = 'production'

const packageName = packageJson.name.replace(/@proforto\//, '')

module.exports = {
  external: ['react'],
  input: 'src/index.js',
  output: {
    file: `dist/${packageName}.js`,
    format: 'cjs',
    sourcemap: true,
    name: changeCase
      .titleCase(packageName.replace(/-/g, ' '))
      .replace(/ /g, ''),
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['env', { modules: false }], 'stage-3', 'react'],
      plugins: ['external-helpers'],
    }),
  ],
}
