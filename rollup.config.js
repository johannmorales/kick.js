import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
}; 
