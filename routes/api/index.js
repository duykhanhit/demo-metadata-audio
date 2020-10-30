const metaDataRouter = require('./metaDataRouter');

module.exports = (app) => {
  app.use('/api/metaData', metaDataRouter)
}