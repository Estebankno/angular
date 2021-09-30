require('./config/connection');

const cors = require('cors');
const express = require('express');
const port = (process.env.port || 3080);

//- EXPRESS INSTANCE
const app = express();

//- USES
app.use(express.json());
app.use(cors());

// CONFIG PORT
app.set('port', port);


// ROUTES
app.use('/', require('./routes'));


// EXPRESS
app.listen(app.get('port'), (error) => {
    if(error){
        console.log('error starting server: ' + error)
    } else {
        console.log('server started on port: ' + port)
    }

})

