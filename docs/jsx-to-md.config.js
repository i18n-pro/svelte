const path = require('path')
const join = path.join
const pkg = require('./package.json')

const codeNameMap = pkg.codeNameMap

const readme = {
  entry: './src/readme',
  out: '../',
  name: 'README',
}

const storeUsage = {
  entry: './src/usage/Store',
  out: './dist/',
  name: 'USAGE_STORE',
}

const contextUsage = {
  entry: './src/usage/Context',
  out: './dist/',
  name: 'USAGE_CONTEXT',
}

const storeApi = {
  entry: './src/api/Store',
  out: './dist/',
  name: 'API_STORE',
}

const contextApi = {
  entry: './src/api/Context',
  out: './dist/',
  name: 'API_CONTEXT',
}

const changeLog = {
  entry: './src/changelog',
  out: './dist/',
  name: 'CHANGELOG',
}

function getSource({ entry, out, name }) {
  const source = Object.entries(codeNameMap).reduce(
    (res, [locale, langName]) => {
      res.push({
        entry: join(__dirname, entry),
        output: join(
          __dirname,
          out,
          `${name}${langName ? `_${langName}` : ''}.md`,
        ),
        params: {
          locale,
        },
      })

      return res
    },
    [],
  )

  return source
}

module.exports = {
  source: [
    ...getSource(readme),
    ...getSource(storeUsage),
    ...getSource(contextUsage),
    ...getSource(storeApi),
    ...getSource(contextApi),
    ...getSource(changeLog),
  ],
}
