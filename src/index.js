const express = require('express');
const morgan = require('morgan');

const connectDb = require('./services/mongodb');

const app = express();

app.set('port', process.env.PORT || 9001);

app.enable('verbose errors');

app.use(morgan('dev'));

connectDb()
    .then(() => console.log('MongoDb connected'))
    .catch((error) => console.error(error));

app.listen(app.get('port'), () => {
    console.log('Server listening on port %s', app.get('port'));
});

require('./services/agenda');
