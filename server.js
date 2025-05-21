import express from "express";
import { MongoClient } from "mongodb";

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db("themoviez");

app.use((req, res, next) => {
    const allowedOrigins = [
        "liveside-link",
        "http://localhost:3001"
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

app.get('/api/tickets', async (_, response) => {
    const data = database.collection('tickets').find().sort({ _id: -1 });

    response.json(await data.toArray());
});

app.post('/api/tickets/add', async (request, _) => {
    const data = request.body;

    database.collection('tickets').insertOne(data);
});

app.get('/api/plans', async (_, response) => {
    const data = database.collection('plans').find().sort({ _id: -1 });

    response.json(await data.toArray());
});

app.post('/api/plans/add', async (request, _) => {
    const data = request.body;

    database.collection('plans').insertOne(data);
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});