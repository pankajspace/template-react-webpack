# Basic Webpack setup for React applications
This is a basic setup for React applications using Webpack. It includes the following features:
- Html
- CSS
- Fonts
- Images
- React
- Webpack
- EsLint
- Webpack Dev Server

## How to use this repository to create a new React application
1. I have created a separate branch for each feature. You can use the branch that you need for your project.
2. Branch names are sequentially numbered for easy reference.
3. All feautures are available into the main branch if you want to use all features.
4. I will keep updating this repository with new features and improvements.

## Installation
1. Clone the repository
2. Run `npm install`
3. Run `npm start` to start the development server
4. Run `npm run lint` to check for linting errors
5. Run `npm run lint:fix` to fix linting errors
6. `npm run build` to build the project for production

## Basic Webpack setup
1. npm init -y
2. npm install webpack webpack-cli --save-dev
3. create public/index.html
4. create src/index.js
5. create webpack.dev.js

## Html Webpack Plugin
npm install html-webpack-plugin --save-dev

## Webpack Dev Server
npm install webpack-dev-server --save-dev

## Css setup
npm i --save-dev style-loader css-loader

## React setup
1. Babel libraries for React and ES6   
- npm install @babel/core @babel/preset-env @babel/preset-react --save-dev
2. Babel loader for Webpack
- npm install babel-loader --save-dev
3. React libraries
- npm install react react-dom
4. Add eslint plugin for React
- npm install eslint-plugin-react --save-dev