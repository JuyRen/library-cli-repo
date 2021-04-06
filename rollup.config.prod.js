import { merge } from 'webpack-merge';
import { terser } from 'rollup-plugin-terser';
import baseConfig from './rollup.config.base';
import pkg from './package.json';

const isTest = process.env.NODE_ENV === 'test';

const config = merge(baseConfig, {
    output: {
        file: './lib/index.js',
        format: isTest ? 'cjs' : 'es',
        exports: 'auto'
    },
    plugins: isTest ? [] : [terser()],
    // 当format: cjs | es的时候，声明@babel/runtime系列包为external, 采用import 引入corejs提供的helper函数
    external: Object.keys(pkg.dependencies).map(item => new RegExp(item)) // 不打包指定的依赖包， 可以使用String | String[] |  RegExp | (id) => boolean
});

export default config;
