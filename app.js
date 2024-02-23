const express = require("express");
const app = express();
const port = 7008;
const bodyParser = require('body-parser');
const cors = require('cors');
require('./Config/confiq')

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes setup
const formRoutes = require('./Router/FormRouter');
app.use('/', formRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
