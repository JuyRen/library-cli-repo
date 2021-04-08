module.exports = {
    presets: [
        [
            '@babel/env',
            {
                modules: false
            }
        ]
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: {
                    version: 3
                },
                useESModules: process.env.NODE_ENV !== 'test'
            }
        ]
    ]
};
