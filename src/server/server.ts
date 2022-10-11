import * as express from "express";
import baseRouter from "./routes";
import * as path from "path";

const app = express();

app.use(express.static("public"));
app.use(express.json()); // allows for req.body parsing
app.use(baseRouter);

// establishes paths for client to use
// add any views where the user should be able to refresh on
const clientPaths = ["/", "/dailydraw", "/diary", "/cards"];

// allows for refreshing on client paths
app.get(clientPaths, (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

// side load this file once to update the source cards with their descriptions
// import "../../Utilities/CardsUpdater";
