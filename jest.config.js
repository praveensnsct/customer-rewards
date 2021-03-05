module.exports = {
  setupFiles: ['./setupTests.js'],
  moduleNameMapper: {
    // ignore these modules
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(woff|woff2|eot|ttf)$': 'identity-obj-proxy',
    '\\.(png|svg|pdf|jpg|jpeg)$': 'identity-obj-proxy',
  }
};