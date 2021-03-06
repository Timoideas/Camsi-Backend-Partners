import express from 'express';
const middleware = express();
import path from 'path';
import favicon from 'serve-favicon';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import router from '../router/index.routes';
middleware.use(cors({ origin: process.env.CORS_CLIENT_HOST }));
middleware.use(express.urlencoded({ extended: true }));
middleware.use(express.json());
middleware.use(
  favicon(path.join(__dirname, '../../public/icons/fav_main.ico'))
);
middleware.use(fileUpload());
middleware.use('/p', express.static(path.join(__dirname, '../../public')));
middleware.use('/', router);
export default middleware;
