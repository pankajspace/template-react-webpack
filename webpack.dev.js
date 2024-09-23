const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the dist directory
    },
    compress: true, // Enable gzip compression for everything served 
    port: 9000,
    hot: true, // Enable hot module replacement feature
    historyApiFallback: true, // Enable HTML5 History API fallback for index.html 404 responses 
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // output directory
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', // Inject CSS into the DOM using style tag 
          'css-loader', // Read CSS files and return CSS code as string to the webpack bundler   
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Webpack Template',
      template: './public/index.html',
    }),
  ],
};