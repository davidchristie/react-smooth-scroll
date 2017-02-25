import path from 'path'

export default {
  entry: {
    app: ['./app/']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('build'),
    publicPath: '/build/'
  }
}
