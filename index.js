const express = require("express");
const appRoute = require('./app'); // fixed relative path
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(appRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
