const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const ownersRouter = require("./routes/ownersRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("index", { error: "" });
});

app.use("/owners", ownersRouter);
app.use("/product", productRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
