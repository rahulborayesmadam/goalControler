const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./Routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started Running on port ${port}`);
});
