module.exports = {
  name: 'binary01.me',
  script: 'npx',
  interpreter: 'none',
  args: 'serve public/ -s -p 80',
  instances : 'max',
  exec_mode : 'cluster'
};
