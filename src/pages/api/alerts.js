import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  // Connection URL
 const url = process.env.NEXT_PUBLIC_MONGODB_URL;

  // Database Name
  const dbName = process.env.NEXT_PUBLIC_DATABASE_NAME;

  // Create a new MongoClient
  const client = new MongoClient(url);

  // Connect to the MongoDB server
  await client.connect();

  const db = client.db(dbName);

  const collection = db.collection("alerts");
  const reqBody = req.body;

  const totalCount = await collection.countDocuments();
  // Retrieve all documents in a collection
  const documents = await collection
    .find({})
    .skip(reqBody.data.offset * 10)
    .limit(10)
    .toArray();
  // // Retrieve a single document by some criteria
  // const document = await collection.findOne({ _id: 'your-document-id' });

  const data = {
    documents,
    totalCount,
  };
  res.status(200).json(data);
};

export default handler;
