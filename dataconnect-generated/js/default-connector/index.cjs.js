const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ARK_Investments',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

