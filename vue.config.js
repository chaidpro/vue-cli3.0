// vue.config.js
module.exports = {
  // 基本路径
  publicPath: '/',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  outputDir: process.env.NODE_ENV === 'development' ? 'test' : 'build',
  devServer: {
    port: 8080,
    open: true,
    proxy: null
  }
};
