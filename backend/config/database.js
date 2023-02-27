const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;