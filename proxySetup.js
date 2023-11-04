const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/service-worker.js',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Puedes ajustar esto según tu configuración
      changeOrigin: true,
    })
  );
};