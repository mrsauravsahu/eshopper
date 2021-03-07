/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// ignoring this error because this is just a build script and package should be in devDependencies
const fs = require('fs');
const esbuild = require('esbuild');
const { default: postCssPlugin } = require('esbuild-plugin-postcss2');

console.log('starting esbuild build...');

const buildDeployable = async () => {
  try {
    await esbuild.build({
      entryPoints: ['src/index.jsx'],
      bundle: true,
      outfile: 'esbuild-bundle/dist/index.js',
      minify: true,
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
      define: {
        'process.env.NODE_ENV': '"production"',
      },
      plugins: [
        postCssPlugin({
          plugins: [],
        }),
      ],
    });

    const indexHtmlPath = 'esbuild-bundle/index.html';
    // Just replacing the base url this way for now.
    let indexHtmlString = await fs.promises.readFile('esbuild-bundle/index.html', { encoding: 'utf-8' });
    indexHtmlString = indexHtmlString.replace('<head>', '<head>\n\t\t<base href="https://mrsauravsahu.tech/eshopper/" />');

    await fs.promises.writeFile(indexHtmlPath, indexHtmlString, { encoding: 'utf-8' });

    console.log('finishing creating bundle');
  } catch (error) { console.error(error); }
};

buildDeployable();
