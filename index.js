const express = require('express');
const dbConnect = require('./config/dbconnection');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const aiRoute = require('./routes/aiRoute')
const calenderRoute = require('./routes/calnderRoute')
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());

app.use(express.json()); // Add this line to parse JSON bodies
app.use('/api/user', userRoute);
app.use('/api/ai', aiRoute);
app.use('/api/calender', calenderRoute);

app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}`);
});
