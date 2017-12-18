const path = require('path')
const { version } = require('./package.json')

export default{
  "entry": "src/index.js",
    publicPath : `/${version}/`,
    outputPath : `./dist/${version}/`,
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime"
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  }
}
