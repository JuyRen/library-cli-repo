import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const config = {
    input: 'src/main.js',
    output: {
        file: 'lib/index.js',
        format: 'umd',
        name: '{{moduleName}}'
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        })
    ],
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    }
};

if (process.env.NODE_ENV === 'development') {
    // config.plugins.push();
} else {
    config.plugins.push(terser());
}

export default config;
