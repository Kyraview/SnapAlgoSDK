
const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    library: "SnapAlgo",
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        
        loader: 'file-loader',
        options: {
          name: '/public/images/[name].[ext]'
        }  
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream'),
        },
      }},
    ],
  },
  mode: "production",
}