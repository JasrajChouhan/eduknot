import express from 'express'
import databaseConnection from './db/database.js';
import axios from 'axios'
import dotenv from 'dotenv';

import user from './route/user.route.js';
import cors from 'cors';
import router from './route/post.route.js';
import postRouter from './route/post.route.js';
import universityRouter from './route/university.route.js';
import commentRouter from './route/comment.route.js';
import loginRouter from './route/login.route.js';
import replyRoutes from './route/reply.route.js';
import queryRouter from './route/query.route.js';
import universityNewsRouter from './route/university.route.js'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000

databaseConnection();

app.use('/api/users', user);
app.use('/api/posts', postRouter);
app.use('/api/universities', universityRouter);
app.use('/api/comments', commentRouter);
app.use('/api/login' , loginRouter);
app.use('/api/replies' , replyRoutes);
app.use('/api/query' , queryRouter);
app.use('/api/news' , universityNewsRouter)




app.listen(port, ()=> console.log(`Server is running on ${port}`))