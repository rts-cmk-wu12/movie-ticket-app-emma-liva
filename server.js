import express from "express";
import { MongoClient } from "mongodb";

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();

async function connectToMongoDB() {
  try {
    const client = new MongoClient(MONGO_CONNECTION_STRING, {
      ssl: true,
      tls: true,
      tlsAllowInvalidCertificates: false,
    });
    
    await client.connect();
    console.log("Connected to MongoDB successfully");
    return client.db("themoviez");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
}

let database;

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

async function startServer() {
  database = await connectToMongoDB();
  
  // Define routes after database is connected
  app.get('/api/tickets', async (_, response) => {
    try {
      const data = database.collection('tickets').find().sort({ _id: -1 });
      response.json(await data.toArray());
    } catch (error) {
      console.error("Error fetching tickets:", error);
      response.status(500).json({ error: "Failed to fetch tickets" });
    }
  });

  // Your other routes with error handling...
  app.post('/api/tickets/add', async (request, response) => {
    try {
      const data = request.body;
      const result = await database.collection('tickets').insertOne(data);
      response.status(201).json(result);
    } catch (error) {
      console.error("Error adding ticket:", error);
      response.status(500).json({ error: "Failed to add ticket" });
    }
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
startServer().catch(console.error);