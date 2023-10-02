import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const extensions = ['.jsx', '.js'];

export default {
    external: Object.keys(pkg.peerDependencies),
    input: pkg.source,
    output: [
      {
        dir: 'dist/cjs',
        exports: 'named',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src', // optional but useful to create a more plain folder structure
        sourcemap: true,
      },
      {
        dir: 'dist/esm',
        exports: 'named',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src', // optional but useful to create a more plain folder structure
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs(),
      nodeResolve({ extensions }),
      json(),
      babel({
        exclude: 'node_modules/**',
        extensions,
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        inject: {
          insertAt: 'top',
        },
        minimize: true,
      }),
      del({ targets: ['dist/*'] }),
    ],
  };

  