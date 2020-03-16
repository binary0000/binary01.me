module.exports = {
  name: 'binary01.me',
  script: 'http-server',
  interpreter: 'none',
  args: 'public/ -p 443 -S -C /etc/letsencrypt/live/binary01.me/cert.pem -K /etc/letsencrypt/live/binary01.me/privkey.pem',
  instances : 'max',
  exec_mode : 'cluster'
};
