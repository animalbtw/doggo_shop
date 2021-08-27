require('dotenv').config();
const express = require('express');
const sequelize = require('./db.js');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const models = require('./models/models');
const fileUpload = require('express-fileupload');
const router = require('./routes/indexRouter');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

//
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
  } catch (e) {
    console.log(e.message);
  }
}

start();