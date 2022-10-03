
const Dotenv = require('dotenv-webpack');
module.exports = {
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify')
      }
    }
  };




module.exports = {

plugins: [
new Dotenv()
]
};