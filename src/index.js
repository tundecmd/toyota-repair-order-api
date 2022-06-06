const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
// const bodyParser = require("body-parser");
const cors = require("cors");

// routes
const authRoutes = require("./routes/auth.js");
const customerOrderFormRoutes = require("./routes/customerOrderForm");

env.config();

// app.use(express.json())
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
app.use(cors())
// app.use(bodyParser());
app.use("/api", authRoutes);
app.use("/api", customerOrderFormRoutes);

// app.get('/', (req, res, next) => {
//   res.status(200).json({
//       message: 'Hello from Server'
//   });
// });

// mongodb://toyota456database:pGo5htXdx9o2CKvZbo2CrH8TfjfaLE6ov4xKcAhtj3ATDwbkgMUNmbMuPfECav7FJxihgjsSuhmpjwtpg0hiWQ==@toyota456database.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@toyota456database@
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.hsbqa.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
  ).then(() => {
    console.log('Database connected!!!!!');
  }).catch((e) => {
    console.log('Not connected to database ===>', e)
  });

  app.get('/api', (req, res, next) => {
    res.status(200).json({
        message: "Hello from server"
    });
  });


app.post('/data', (req, res, next) => {
  res.status(200).json({
      message: req.body
  });
});

app.get('/signin', (req, res, next) => {
  res.status(200).json({
      message: req.body
  });
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)
});