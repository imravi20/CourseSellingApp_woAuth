const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(port);
