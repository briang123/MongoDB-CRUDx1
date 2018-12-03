const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Deleting records', () => {   

    var char;

    beforeEach(done => {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            done();
        });
    });

    // Create tests
    it('Delete one records from the database', done => {

        MarioChar.findOneAndDelete({name: 'Mario'}).then(result =>  {
            MarioChar.findOne({name:'Mario'}).then(result => {
                assert(!result);
            }).finally(done);
        });

    });

});