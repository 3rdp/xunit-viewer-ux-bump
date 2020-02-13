const path = require('path')
const fs = require('fs')

const getFiles = require('./get-files')
const getSuites = require('./get-suites')

const logger = {
  warning: input => input,
  file: input => input,
  error: input => input
}

const main = async () => {
  const files = getFiles(logger, { results: path.resolve(__dirname, '../../data') })
  const suites = await getSuites(logger, files)
  fs.writeFileSync(path.resolve(__dirname, 'get-suites-expected.json'), JSON.stringify(suites, null, 2))
}
main()
