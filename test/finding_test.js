const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Finding records', () =>  {   

    var char;

    beforeEach(done => {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            done();
        });
    });

    // Create tests using ES7 async/await cleaner way of handling promises vs. callbacks or chaining
    it('Finds one record from database', async () =>  {

        const result = await MarioChar.findOne({name:'Mario'});
        assert(result.name==='Mario');

    });

    it('Finds one record by ID from database', async () =>  {

        const result = await MarioChar.findOne({_id:char._id});
        assert(result._id.toString()===char._id.toString());

    });

});