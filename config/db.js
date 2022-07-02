const mongoose = require('mongoose');
// replace this with your own mongoose

const MONGOURI = 'mongodb+srv://Minzo:minzo@minzo1.83vmrrt.mongodb.net/?retryWrites=true&w=majority';


const IntailMongoServer = async () => {

    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
        });
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    
        throw error;
    }
}

module.exports = IntailMongoServer;