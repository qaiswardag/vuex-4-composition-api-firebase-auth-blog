// vue.config.js
module.exports = {
  // ...
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 4004,
    https: false,
    hotOnly: false,
  },
  // ...
};
