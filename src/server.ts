import  mongoose from 'mongoose';
import { app } from "./app";

const MONGO_URI = 'mongodb://localhost:27017/Test';

const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(async () => {
  app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
  );
});
