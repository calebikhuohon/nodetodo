var configValues = require('./config');


module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://test:test@ds125994.mlab.com:25994/nodetodosample';
    }
}