import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js'; // sometimes we have to write .js 


dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['Get', 'post', 'delete', 'options'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT || 4000; // 4000, 5000, 5173, 8000, 8080     

app.get('/', (req, res) => {
  res.send('Praneet Singh');
});

app.get('/praneet', (req, res) => {
    res.send('Hello, Praneet');
  });



app.get('/hitesh', (req, res) => {
    res.send('hitesh');
})

  // connect to db
  db();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

