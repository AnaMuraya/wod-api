const express = require('express');
//hooking up our v1 express router
const v1Router = require('./v1/routes');

const app = express();
const PORT = process.env.PORT || 3000;

//For testing purposes
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use('/api/v1', v1Router);

//listening on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}
);