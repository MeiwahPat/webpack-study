const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development',
    entry: './src/index.js',
    // entry: {
        // index: './src/index.js',
        // print: './src/print.js',
        // another: './src/another-module.js',
        // index: {
        //     import: './src/index.js',
        //     // 配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块
        //     dependOn: 'shared',
        // },
        // another: {
        //     import: './src/another-module.js',
        //     dependOn: 'shared'
        // },
        // 配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块
        // shared: 'lodash'
    // },
    /**
     * 为了更容易地追踪 error 和 warning，JavaScript 提供了 source maps 功能，
     * 可以将编译后的代码映射回原始源代码。
     * 如果一个错误来自于 b.js，source map 就会明确的告诉你。
     * 此配置仅用于示例，不要用于生产环境
     */
    // devtool: 'inline-source-map',
    /**
     * 使用 watch mode, webpack 自动地重新编译修改后的模块！
     * 唯一的缺点是，为了看到修改后的实际效果，你需要刷新浏览器。
     * 如果能够自动刷新浏览器就更好了，
     * 因此接下来我们会尝试通过 webpack-dev-server 实现此功能。
     */
    // devServer: {
    //     // 告知 dev server，从什么位置查找文件
    //     /**
    //      * 将 dist 目录下的文件 serve 到 localhost:8080 下。
    //      * （译注：serve，将资源作为 server 的可访问文件）
    //      */
    //     /**
    //      * Tip: 
    //      * 文件将可以通过 http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename] 进行访问
    //      */
    //     static: './dist'
    // },
    plugins: [
        /**
         * 用新生成的 index.html 文件，替换我们的原有文件。
         * 创建了一个全新的文件，所有的 bundle 会自动添加到 html 中。
         */
        new HtmlWebpackPlugin({
            // title: 'Development'
            title: "Caching",
        })
    ],
    output: {
        // filename: '[name].bundle.js',
        /**
         * bundle 的名称是它内容（通过 hash）的映射。
         * 如果我们不做修改，然后再次运行构建，我们以为文件名会保持不变。
         * 然而，如果我们真的运行，可能会发现情况并非如此
         */
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        // 在每次构建前清理 /dist 文件夹，这样只会生成用到的文件。
        clean: true,
        // publicPath: '/'
    },
    /**
     * 如果我们要在一个 HTML 页面上使用多个入口时，
     * 还需设置 optimization.runtimeChunk: 'single'
     */
    // optimization: {
    //     runtimeChunk: 'single',
    //     moduleIds: 'deterministic',
    //     /**
    //      * 将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
    //      */
    //     splitChunks: {
    //         // chunks: 'all',
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //             }
    //         }
    //     }
    // },
}