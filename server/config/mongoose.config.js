const mongoose = require("mongoose");

const dbName = "pet_shelter_db";

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    // These may not be needed in newest version?
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfully connected to ${dbName}`);
  })
  .catch((error) =>
    console.log(`mongoose connection to ${dbName} failed:`, error)
  );
