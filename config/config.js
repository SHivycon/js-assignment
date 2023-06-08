const config = {
  development: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'Shi@12311',
      database: 'sys'
    },
  },
  test: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'Shi@12311',
      database: 'sys'
    },
  }
};

const env = process.env.NODE_ENV || 'development';

const configuration = config[env];

module.exports = configuration;