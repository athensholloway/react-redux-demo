# React & Redux Demo

### To build the app
`npm run build` and open `/dist/index.html`

#### Install eslint
npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev eslint-config-airbnb@latest

#### Install Webpack & Babel & eslint
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react html-webpack-plugin html-webpack-template eslint eslint-loader webpack --save-dev

#### Install React & Redux
npm install react react-dom redux redux-thunk redux-logger react-redux --save atom
