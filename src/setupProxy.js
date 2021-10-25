const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://blog-api-uttam.herokuapp.com/api/',
      changeOrigin: true,
    })
  );
};