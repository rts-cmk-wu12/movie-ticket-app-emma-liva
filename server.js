import ViteExpress from "vite-express";
import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

ViteExpress.listen(app, PORT, () => console.log(`Server running on http://localhost:${PORT}`));