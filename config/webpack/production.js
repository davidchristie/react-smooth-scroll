import webpack from 'webpack'
import merge from 'webpack-merge'

import base from './base'

export default merge(base, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({})
  ]
})
