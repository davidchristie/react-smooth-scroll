import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import config from '../config/webpack/development'

const port = 3000
const url = `http://localhost:${port}/`

config.entry.app.unshift(
  `webpack-dev-server/client?${url}`,
  'webpack/hot/dev-server'
)

const publicPath = config.output.publicPath

const compiler = webpack(config)

const server = new WebpackDevServer(
  compiler,
  {
    hot: true,
    publicPath,
    stats: {colors: true}
  }
)

server.listen(
  port,
  () => {
    console.log(`Project is running at ${url}`)
    console.log(`Webpack output is served from ${publicPath}`)
  }
)
