const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const developer = 'Brandon Lee'
const realName = 'Dokyeom Lee'
const email = 'lovefinance@naver.com'
const github = 'https://github.com/Developer-Brandon?tab=repositories'

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/whole_style.scss";
        `,
      },
    },
  },

  devServer: { disableHostCheck: true },
  productionSourceMap: false,

  configureWebpack: {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.BannerPlugin(`Developer: ${developer} (${realName})\nEmail: ${email}\nGithub: ${github}\n`),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        _: 'lodash',
        'window.jQuery': 'jquery',
        Promise: 'es6-promise',
      }),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      minimize: true,
      concatenateModules: true,
    },
  },

  transpileDependencies: [
    'vuetify',
  ],
}
