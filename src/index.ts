import dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "body-parser";

const hbs = require('hbs');

const cors = require('cors');

const app: Application = express();
import HomeRouter from "./routes/homeRouter";
import ApiRouter from "./routes/apiRouter";

dotenv.config();

const port: string | number = process.env.PORT || 3000;

app.set('view engine', 'hbs');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/public', express.static(`${process.cwd()}/public`));

app.use(HomeRouter);

// Your first API endpoint
app.use('/api', ApiRouter);

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
