const path = require('path')
const join = path.join
const package = require('./package.json')

const codeNameMap = package.codeNameMap

const readme = {
  entry: './src/readme',
  out: '../',
  name: 'README',
}

const usage = {
  entry: './src/usage',
  out: './dist/',
  name: 'USAGE',
}

const api = {
  entry: './src/api',
  out: './dist/',
  name: 'API',
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
    ...getSource(usage),
    ...getSource(api),
    ...getSource(changeLog),
  ],
}
