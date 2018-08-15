module.exports = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.(mdx)$/,
      use: ['next-babel-loader', 'zeus-md-loader']
    })
    return config
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zeus' : ''
}
