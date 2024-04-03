// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// const uri =
//   "mongodb+srv://manu:Testing1234@cluster0.h2w23ta.mongodb.net/test?retryWrites=true&w=majority";
// const clientOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };
// mongoose
//   .connect(uri, clientOptions)
//   .then(() => {
//     console.log("Database connected successfully");
//     app.listen(PORT);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// })();
