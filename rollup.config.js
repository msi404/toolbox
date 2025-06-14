import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' })
  ],
  external: ['react', 'react-dom'],
};
