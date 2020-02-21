module.exports = {
  name: 'binary01.me',
  script: 'serve',
  env: {
    PM2_SERVE_PATH: './public/',
    PM2_SERVE_PORT: 80,
    PM2_SERVE_HOMEPAGE: './public/index.html'
  }
}