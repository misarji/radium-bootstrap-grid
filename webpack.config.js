var path = require("path");
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "lib"),
    publicPath: "lib/", // relative path for github pages
    filename: "main.js", // no hash in main.js because index.html is a static page
    // chunkFilename: "[hash]/js/[id].js",
    // hotUpdateMainFilename: "[hash]/update.json",
    // hotUpdateChunkFilename: "[hash]/js/[id].update.js"
  },
  module: {
    loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ["transform-decorators-legacy", "transform-class-properties"]
          }
        },{
          test: /\.js?$/,
          /* add a directory to exclude regex */
          exclude: /(scripts|script|node_modules|bower_components|web)/,
          loaders: ['eslint-loader']
        },{
          test: /\.ts$/,
          loader: 'ts-loader'
        }
      ]
  }
};
