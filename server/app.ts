import express from 'express';
import dotenv from 'dotenv';
import compression from 'compression';
import { join } from 'path';
import morgan from 'morgan';
import http from 'http';
import router from './routes';
import bodyParser from 'body-parser';
import multer from 'multer';


dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3500);
app.use([
    express.json(),
    compression(),
    express.urlencoded({ extended: false }),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
]);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use('/api', router)
const server = http.createServer(app);
export { app, server };