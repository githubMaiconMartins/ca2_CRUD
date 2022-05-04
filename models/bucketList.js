const mongoose = require('mongoose');//request statement
var Bucketschema = new mongoose.Schema({ // object of  my schema

    //specifing the structure of my bucket document, there will be 4 fields
    name: {
        type: String

    },
    nationality: {
        type: String
    },
    age: {
        type: String

    },
    dream: {
        type: String
    }

});
//Registering this schema inside mongoose using model function
mongoose.model('bucket', Bucketschema);
