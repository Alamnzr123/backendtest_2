const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const router = require('./src/routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})

