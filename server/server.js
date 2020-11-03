import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Persons from './models/dbPersonCards.js';

const PORT = process.env.PORT || 8000;
const app = express();
const dbConnectionUrl = 'mongodb+srv://admin:iIq73amzM7VR5vPE@cluster0.5nyc7.mongodb.net/tinder-clone-db?retryWrites=true&w=majority';

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://ghostmurda.github.io', 'https://mern-tinder-5f7ec.web.app']
}));

mongoose.connect(dbConnectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.post('/persons', (req, res) => {
    const dbPerson = req.body;
    Persons.create(dbPerson, (err, data) => {
        if (err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/persons', (req, res) => {
    Persons.find((err, data) => {
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));