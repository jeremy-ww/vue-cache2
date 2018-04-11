module.exports = (options, req) => ({
  entry: './examples/index.js',
  webpack (config) {
    config.output.publicPath = '/' + require('./package').name + '/'
    return config
  }
})
