/* eslint-disable no-console */

// ignoring this error because this is just a build script and package should be in devDependencies
// eslint-disable-next-line import/no-extraneous-dependencies
const esbuild = require('esbuild');

console.log('starting esbuild build...');

esbuild
  .build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    outfile: 'esbuild-bundle/dist/index.js',
    minify: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  })
  .then(() => { console.log('done'); })
  .catch(console.error);
