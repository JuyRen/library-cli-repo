import nodeResolve from '@rollup/plugin-node-resolve'; // 帮助寻找node_modules里的包
import babel from '@rollup/plugin-babel'; // rollup 的 babel 插件，ES6转ES5
import commonjs from '@rollup/plugin-commonjs'; // 将非ES6语法的包转为ES6可用
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isDev = process.env.NODE_ENV === 'development';

const config = {
    input: './src/main.js',
    output: {
        file: './lib/index.js',
        format: 'umd',
        name: '~~moduleName~~',
        sourcemap: isDev
        // globals: { // 与external配套使用
        //     jquery: '$'
        // }
    },
    plugins: [
        // @rollup/plugin-node-resolve
        // @rollup/plugin-babel
        // 同时使用时，nodeResolve要在babel之前
        nodeResolve(),
        babel({
            babelHelpers: 'runtime', // https://github.com/rollup/plugins/tree/master/packages/babel，建议使用runtime
            exclude: '**/node_modules/**' // String | RegExp | Array[...String|RegExp]
            // include: '',
            // extensions: ['.ts'] // 只对符合后缀的文件的进行编译
        }),
        replace({
            preventAssignment: true, // 防止values里面的key 在代码中 跟单个等号（赋值操作）时，被替换
            values: {
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        commonjs()
    ]
    // 当format: cjs | es的时候，声明@babel/runtime系列包为external
    // external: /@babel\/runtime/ // 不打包指定的依赖包， 可以使用String | String[] |  RegExp | (id) => boolean
};

if (isDev) {
    config.plugins.push(
        serve({
            open: true,
            openPage: '/examples/index.html',
            port: 9999
        }),
        livereload()
    );
} else {
    config.plugins.push(terser());
}

export default config;
