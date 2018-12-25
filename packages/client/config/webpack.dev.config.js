const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getAbsolutePath = function(relativePath) {
  return path.resolve(__dirname, '../', relativePath);
};

const config = {
  entry: {
    app: getAbsolutePath('./src/index.js'),
    
  },
  output: {
    path: getAbsolutePath('./public'),
    filename: '[name].bundle.js'
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: getAbsolutePath('./public'),
    historyApiFallback: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              [
                'babel-plugin-react-css-modules',
                {
                  filetypes: {
                    '.scss': {
                      'syntax': 'postcss-scss'
                    }
                  },
                  generateScopedName: '[path][name]__[local]__[hash:base64:5]'
                }
              ]
            ]
          }
        }
      },{
        test: /\.exec\.js$/,
        use: [
          { loader: 'script-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]__[hash:base64:5]',
              importLoaders: 1
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.svg$/,
        include: getAbsolutePath('./public/assets/icons/'),
        use: [
          {
            loader: 'svg-sprite-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': getAbsolutePath('./src'),
      '~': getAbsolutePath('./public')
    },
    mainFiles: ['index'],
    extensions: ['*', '.js', '.jsx', '.css', 'scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: getAbsolutePath('./public/index.html')
    })
  ]
};

module.exports = config;
