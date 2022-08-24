import * as express from "express";
import baseRouter from "./routes/routes";
import * as path from "path";

const app = express();

app.use(express.static("public"));
app.use(express.json()); // allows for req.body parsing
app.use(baseRouter);

const clientPaths = ["/"]; // establishes paths for client to use

// allows for refreshing on client paths
app.get(clientPaths, (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
