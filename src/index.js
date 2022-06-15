const express = require('express');
//to parse the sent JSON into request body
const bodyParser = require('body-parser');
//hooking up our v1 express router
const v1WorkourRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/v1/workouts', v1WorkourRouter);

//listening on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}
);