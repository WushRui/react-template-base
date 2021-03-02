const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    devServer: {
        port: 8000,
        proxy: {
            '/pub': {
                target: 'http://xxx.xxx',
                secure: false,
                changeOrigin: true
            },
        },
        disableHostCheck: true
    },
};
