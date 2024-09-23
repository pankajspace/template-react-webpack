Basic Webpack setup for React applications

## First steps
1. npm init -y
2. npm install webpack webpack-cli --save-dev
3. create public/index.html
4. create src/index.js
5. create webpack.dev.js

## Webpack

### Html Webpack Plugin
npm install html-webpack-plugin --save-dev

### Webpack Dev Server
npm install webpack-dev-server --save-dev

## Css setup

### To insert css files into the bundle main.js
npm i --save-dev style-loader css-loader

## React setup 

### Babel libraries for React and ES6 syntax  
npm install @babel/core @babel/preset-env @babel/preset-react --save-dev

### Babel loader for Webpack
npm install babel-loader --save-dev

### React
npm install react react-dom