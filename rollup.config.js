import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  dest: 'dist/kaboom.js',
  format: 'umd',
  plugins: [
    nodeResolve({}),
    commonjs({}),
  ],
  moduleName: 'kaboom'
};
