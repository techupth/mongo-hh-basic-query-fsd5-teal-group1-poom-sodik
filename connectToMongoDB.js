import { MongoClient } from "mongodb";

export async function connectToMongoDB(queryFn) {
  const url = "mongodb://localhost:27017";
  const dbName = "practice-mongo";

  try {
    const client = await MongoClient.connect(url);
    console.log("Connected to MongoDB successfully.");

    const db = client.db(dbName);
    const collection = db.collection("pizzaOrders");

    const result = await queryFn(collection);

    client.close();
    return result;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}
