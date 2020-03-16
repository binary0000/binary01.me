module.exports = {
  name: 'binary01.me',
  script: 'http-server',
  interpreter: 'none',
  args: 'public/ -p 80',
  instances : 'max',
  exec_mode : 'cluster'
};
