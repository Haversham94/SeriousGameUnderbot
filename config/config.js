var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'seriousgameunderbot'
    },
    port: 3000,
    db: 'mongodb://localhost/seriousgameunderbot-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'seriousgameunderbot'
    },
    port: 3000,
    db: 'mongodb://localhost/seriousgameunderbot-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'seriousgameunderbot'
    },
    port: 3000,
    db: 'mongodb://localhost/seriousgameunderbot-production'
  }
};

module.exports = config[env];
