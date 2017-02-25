import webpack from 'webpack'
import merge from 'webpack-merge'

import base from './base'

export default merge(base, {
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
