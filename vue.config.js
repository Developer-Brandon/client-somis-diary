const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
  filenameHashing: false,
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
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        // },
        // {
        //   test: /\.s(c|a)ss$/,
        //   use: [
        //     'vue-style-loader',
        //     'css-loader',
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //         // eslint-disable-next-line
        //         implementation: require('sass'),
        //         // eslint-disable-next-line
        //         fiber: require('fibers'),
        //       },
        //     },
        //   ],
        // },
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
      // new VuetifyLoaderPlugin(),
      // new VueLoaderPlugin(),
    ],
    optimization: {
      minimize: true,
      concatenateModules: true,
    },
  },
}
