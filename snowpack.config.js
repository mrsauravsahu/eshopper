// snowpack.config.js
const httpProxy = require('http-proxy');

const proxy = httpProxy.createServer({ target: 'http://localhost:5000' });

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    src: '/eshopper/dist',
    public: '/eshopper',
  },
  plugins: [
    /* ... */
  ],
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => {
        // remove /api prefix (optional)
        req.url = req.url.replace(/^\/api/, '');

        proxy.web(req, res);
      },
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    open: 'none',
  },
  buildOptions: {
    /* ... */
  },
};
