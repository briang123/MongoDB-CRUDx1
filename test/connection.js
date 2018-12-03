const mongoose = require('mongoose');
const connection = mongoose.connection;

//ES6 Promises
mongoose.Promise = global.Promise;

mongoose.set('useFindAndModify', false);

const DB = 'testdb';
const URI = `mongodb://localhost:27017/${DB}`;
const OPTS = { useNewUrlParser: true };

//Connect to db before tests run
before(done => {

    //connect to mongodb
    mongoose.connect(URI, OPTS);

    connection.once('open', () => {
        console.log('Connection has been open.');
        done();
    }).on('error', error => {
        console.log('Connection error:',error);
    });

});

//Drop the characters collection before each test
beforeEach(done => {

    //Drop the collection
    connection.collections.mariochars.drop(() => {
        done();
    });
});

//Close the connection after the tests run
after(done => {
    connection.close();
    done();
})