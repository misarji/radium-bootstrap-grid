const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: "main.js", // no hash in main.js because index.html is a static page
    path: path.resolve(__dirname, 'lib'),
    clean: true,
    // chunkFilename: "[hash]/js/[id].js",
    // hotUpdateMainFilename: "[hash]/update.json",
    // hotUpdateChunkFilename: "[hash]/js/[id].update.js"
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader:
              `babel-loader?${
                JSON.stringify({
                  presets: ["@babel/preset-react"],
                  plugins: ["transform-decorators-legacy", "transform-class-properties"],
                })}`,
          },
        ],
      },{
        test: /\.js?$/,
        /* add a directory to exclude regex */
        exclude: /(scripts|script|node_modules|bower_components|web)/,
        use: [
          {
            loader:'eslint-loader',
          },
        ]
      }
    ]
  }
};
