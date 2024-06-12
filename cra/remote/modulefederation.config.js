const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  exposes: {
    './Bucket': './src/Bucket',
  },
  remotes: {
    sharedComponents: 'sharedComponents@http://localhost:3010/remoteEntry.js'
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};


