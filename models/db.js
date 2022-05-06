const mongoose = require('mongoose');

//connection to my database
/* Copy the line of code from file Readme here */


dbconnect = mongoose.connect('/* Copy the line of code from Read me file  here */', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('-------------------------MongoDB Connection Was a Success.----------------------------------') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./bucketList');