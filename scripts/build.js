import webpack from 'webpack'

import config from '../config/webpack/production'

const compiler = webpack(config)

compiler.run((error, stats) => {
  if (error) {
    console.log(error)
  }
  console.log(stats.toString({
    colors: true
  }))
})
