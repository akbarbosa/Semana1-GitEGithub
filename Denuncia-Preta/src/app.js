require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const express = require("express"); 
const cors = require("cors");
const mongoose = require("./database/mongooseConnect");
const routes = require("./routes/locaisRoute");
const index = require("./routes/index")

const app = express(); 
app.use(express.json()); 
mongoose.connect()
app.use("/",index)
app.use("/routes/locaisRoute", routes);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));


module.exports = app;