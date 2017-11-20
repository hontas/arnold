import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'index.mjs',
  output: {
    file: 'dist/arnold-says.js',
    format: 'umd',
    name: 'arnold-says',
    sourcemap: true
  },
  plugins: [
    babel({
      presets: [ 'es2015-rollup' ],
      babelrc: false,
      comments: true,
      runtimeHelpers: true
    }),
    uglify()
  ]
};
