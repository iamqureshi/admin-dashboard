import { MongoClient } from "mongodb";

const handler = async (req, res) => {
   const url = process.env.NEXT_PUBLIC_MONGODB_URL;

   // Database Name
   const dbName = process.env.NEXT_PUBLIC_DATABASE_NAME;

  // Create a new MongoClient
  const client = new MongoClient(url);

  // Connect to the MongoDB server
  await client.connect();

  const db = client.db(dbName);

  const collection = db.collection("options");

  const documents = await collection
    .find({}, { ticker: 1 })
    .limit(20)
    .toArray();
  const data = {
    documents,
  };
  res.status(200).json(data);
};

export default handler;
