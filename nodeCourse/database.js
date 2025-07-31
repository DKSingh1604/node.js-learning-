const { MongoClient } = require("mongodb");
const { log } = require("node:console");

const url =
  "mongodb+srv://namastedev:zOZ8bTPvdsyfqocN@namastenode.qhup9vn.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Deepika",
    lastName: "Padukone",
    city: "Dehradun",
    country: "India",
  };

  //Inserting
  const insertResult =
    await collection.insertMany([data]);
  console.log(
    "Inserted dosuments => ",
    insertResult
  );

  //Read
  const findResult = await collection
    .find({})
    .toArray();
  console.log("Found documents => ", findResult);

  //Update
  const updatedResult =
    await collection.updateOne(
      { firstName: "Dev Karan" },
      { $set: { firstName: "Garry" } }
    );
  console.log(
    "Updated documents => ",
    updatedResult
  );

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
