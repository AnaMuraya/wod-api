const express = require('express');
//to parse the sent JSON into request body
const bodyParser = require('body-parser');
//data caching for improving perfomance
const apicache = require("apicache");
//hooking up our v1 express router
const v1WorkourRouter = require('./v1/routes/workoutRoutes');
const { docs: v1Docs } = require('./v1/swagger');

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cache("3 minutes"));
app.use('/api/v1/workouts', v1WorkourRouter);

//listening on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    v1Docs(app, PORT);
}
);