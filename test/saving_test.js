const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Saving records', () =>  {

    // Create tests
    it('saves a record to the database', done => {
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            assert(!char.isNew);
            done();
        });
    });

});