const { createProxyMiddleware } = require('http-proxy-middleware');
const BASE_URL = 'http://localhost:3000/dev/gql';
module.exports = function(app) {
  app.use(
    '/gql',
    createProxyMiddleware({
       target: BASE_URL,
       headers: {
        'X-API-KEY': ''
       },
       changeOrigin: true,
       pathRewrite: {
        '^/gql': '', // remove base path
      },
    })
  )
}