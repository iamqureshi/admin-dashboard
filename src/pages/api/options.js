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

  const reqBody = req.body;

  // Retrieve all documents in a collection
  const totalCount = await collection.countDocuments({});
  const documents = await collection
    .find({})
    .sort({tradeTime:-1})
    .skip(reqBody.data.offset * 20)
    .limit(20)
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
