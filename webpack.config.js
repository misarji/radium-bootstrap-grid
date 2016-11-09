module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: './lib',
    filename: "main.js", // no hash in main.js because index.html is a static page
    // chunkFilename: "[hash]/js/[id].js",
    // hotUpdateMainFilename: "[hash]/update.json",
    // hotUpdateChunkFilename: "[hash]/js/[id].update.js"
    libraryTarget: "commonjs2"
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
        }
      ]
  }
};
