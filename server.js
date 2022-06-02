require('dotenv').config(); //comment this line before uploading to heroku
require('./server');
require('./db_connection.js');
const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
app.use(express.json());
const { ticketRouter } = require("./routers/TicketRouter");
const { movieRouter } = require("./routers/MovieRouter");
const { theaterRouter } = require("./routers/TheaterRouter");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header('Access-Control-Allow-Headers', "*");
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.set('Content-Type', 'application/json; charset=utf-8');
  next();
});

console.log("test-server");
app.use('/tickets', ticketRouter);
app.use('/movies', movieRouter);
app.use('/theaters', theaterRouter);

app.use(express.urlencoded({ extended: true }));
router.use((req, res, next) => {
  console.log("/", req.method);
  next();
});

router.get("/", (req, res) => {
  res.json({ "message": "Please use /api" });
  
});

app.listen(port, () => console.log('Express server is running on port', port));