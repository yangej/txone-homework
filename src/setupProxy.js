/* eslint-disable */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/open-weather',
    createProxyMiddleware({
      target: 'https://api.openweathermap.org',
      changeOrigin: true,
      logger: console,
      logLevel: 'debug',
      pathRewrite: (path) => {
        return path + `&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
      },
    }),
  );
};
