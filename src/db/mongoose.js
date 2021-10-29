const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://<username>:<password>@portfolio.mxjqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
