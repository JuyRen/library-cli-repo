import { merge } from 'webpack-merge';
import baseConfig from './rollup.config.base';

const config = merge(baseConfig, {
    output: {
        file: './lib/index.js',
        format: 'cjs',
        exports: 'default'
    }
});

export default config;
