const path = require('path');

module.exports = {
  entry: './script.js', // Your entry file
  output: {
    filename: 'bundle.js', // The bundled output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};
