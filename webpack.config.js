const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map', // Add source maps for debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the dist directory
    },
    compress: true, // Enable gzip compression for everything served 
    port: 9000,
    hot: true, // Enable hot module replacement feature
    historyApiFallback: true, // Enable HTML5 History API fallback for index.html 404 responses 
    open: true, // Open the default browser when the server starts
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // output directory
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve certain extensions in import statements 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', // Inject CSS into the DOM using style tag 
          'css-loader', // Read CSS files and return CSS code as string to the webpack bundler   
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Load images
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Load fonts
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile ES6+ code to ES5 using Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Presets for transpiling ES6+ and React
          }
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // Generate index.html file in the dist directory copying the content from the public/index.html file
      title: 'React Webpack Template',
      template: './public/index.html',
    }),
  ],
};