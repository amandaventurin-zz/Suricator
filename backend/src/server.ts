import express from "express";
import routes from "./routes";
import "express-async-errors";

import { search } from "./lyric";
import querystring from "querystring";
import { pln } from "./pln";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
