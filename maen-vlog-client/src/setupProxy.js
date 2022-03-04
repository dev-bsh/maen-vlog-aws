const createProxyMiddleware = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "http://ec2-3-39-80-116.ap-northeast-2.compute.amazonaws.com:8080/",
      changeOrigin: true,
    })
  );
};
