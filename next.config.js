module.exports = {
  rewrites() {
    return [
      {
        output: 'export',
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
    ]
  },
}
