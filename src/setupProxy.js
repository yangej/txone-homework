const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/open-weather',
    createProxyMiddleware({
      target: 'https://api.openweathermap.org',
      changeOrigin: true,
    })
  );
};