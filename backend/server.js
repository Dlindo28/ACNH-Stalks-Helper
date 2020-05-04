const express = require("express");
//const uuid = require("uuid");

const app = express();

//app.get();

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
