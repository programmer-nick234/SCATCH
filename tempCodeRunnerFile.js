const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path")
const ownersRouter = require("./routes/ownersRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");