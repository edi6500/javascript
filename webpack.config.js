const path = require('path');

module.exports= {
    watch: true,
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        open: true
    }
}