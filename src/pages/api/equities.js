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

  const collection = db.collection("equities");

  // Retrieve all documents in a collection
  const documents = await collection.find({}).limit(30).toArray();
  // // Retrieve a single document by some criteria
  // const document = await collection.findOne({ _id: 'your-document-id' });

  res.status(200).json(documents);
};

export default handler;
