//webpack.config.js
if(process.env.NODE_ENV === 'development') {
  var loaders = ['react-hot', 'babel']
} else {
  var loaders = [babel]
}

module.exports = {
  devtool: 'eval',
  entry: './app-client.js'
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: Loaders,
      exclude: /node_module/
    }]
  }
};
