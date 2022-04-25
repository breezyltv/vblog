const bunyan = require('bunyan');
// Load package.json
const pjs = require("../../package.json");

const dbConfig = require("./db.config");

// Get some meta info from the package.json
const { name, version } = pjs;

// Set up a logger
const getLogger = (serviceName, serviceVersion, level) => bunyan.createLogger({ name: `${serviceName}:${serviceVersion}`, level });

// Configuration options for different environments
module.exports = {
  dev: {
    name,
    version,
    serviceTimeout: 30,
    postgres:{options:{
       ...dbConfig,
       logging: msg => getLogger(name, version, 'debug').info(msg)
      }},
    log: () => getLogger(name, version, 'debug'),
  },
  prod: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name, version, 'info'),
  },
  test: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name, version, 'fatal'),
  },
};