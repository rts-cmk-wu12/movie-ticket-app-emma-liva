import express from "express";
import { MongoClient, ObjectId } from "mongodb";

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

  app.get('/api/tickets', async (_, response) => {
    try {
      const data = database.collection('tickets').find().sort({ _id: -1 });
      response.json(await data.toArray());
    } catch (error) {
      console.error("Error fetching tickets:", error);
      response.status(500).json({ error: "Failed to fetch tickets" });
    }
  });

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

  app.delete('/api/tickets/:id', async (request, response) => {
    try {
      const { id } = request.params;
      const result = await database.collection('tickets').deleteOne({ _id: new ObjectId(id) });
      response.status(201).json(result);
    } catch (error) {
      console.error("Error removing ticket:", error);
      response.status(500).json({ error: "Failed to remove ticket" });
    }
  });

  app.get('/api/plans', async (_, response) => {
    try {
      const data = database.collection('plans').find().sort({ _id: -1 });
      response.json(await data.toArray());
    } catch (error) {
      console.error("Error fetching saved plans:", error);
      response.status(500).json({ error: "Failed to fetch saved plans" });
    }
  });

  app.post('/api/plans/add', async (request, response) => {
    try {
      const data = request.body;
      const result = await database.collection('plans').insertOne(data);
      response.status(201).json(result);
    } catch (error) {
      console.error("Error adding movie to saved plans:", error);
      response.status(500).json({ error: "Failed to add movie to saved plans" });
    }
  });

  app.delete('/api/plans/:id', async (request, response) => {
    try {
      const { id } = request.params;
      const result = await database.collection('plans').deleteOne({ _id: new ObjectId(id) });
      response.status(201).json(result);
    } catch (error) {
      console.error("Error removing movie to saved plans:", error);
      response.status(500).json({ error: "Failed to remove movie to saved plans" });
    }
  });

  app.get('/api/users', async (_, response) => {
    try {
      const data = database.collection('users').find().sort({ _id: -1 });
      response.json(await data.toArray());
    } catch (error) {
      console.error("Error fetching users:", error);
      response.status(500).json({ error: "Failed to fetch users" });
    }
  });

  app.get('/api/users/:id', async (request, response) => {
    try {
      const { id } = request.params;
      const result = await database.collection('users').findOne({ _id: new ObjectId(id) });
      response.status(200).json(result);
    } catch (error) {
      console.error("Error finding the selected user:", error);
      response.status(500).json({ error: "Failed to find the selected user" });
    }
  });

  app.post('/api/user/add', async (request, response) => {
    try {
      const data = request.body;
      const result = await database.collection('users').insertOne(data);
      response.status(201).json({ userId: result.insertedId });
    } catch (error) {
      console.error("Error adding user to database:", error);
      response.status(500).json({ error: "Failed to add user to database" });
    }
  });

  app.post('/api/user/login', async (request, response) => {
    try {
      const { username } = request.body;

      const user = await database.collection("users").findOne({ username });
      response.status(200).json({ userId: user._id });
    } catch (error) {
      console.error("Error finding user in the database:", error);
      response.status(500).json({ error: "Failed to find user in the database" });
    }
  });

  app.delete('/api/users/:id', async (request, response) => {
    try {
      const { id } = request.params;
      const result = await database.collection('users').deleteOne({ _id: new ObjectId(id) });
      response.status(201).json(result);
    } catch (error) {
      console.error("Error removing user from database:", error);
      response.status(500).json({ error: "Failed to remove user from database" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer().catch(console.error);