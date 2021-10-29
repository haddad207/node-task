const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://fadi:t1QFqMVniRS9QFFV@portfolio.mxjqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
