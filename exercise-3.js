import { connectToMongoDB } from "./connectToMongoDB.js";
const findDocument_1 = async (collection) => {
  return await collection.find({}).sort({ total_price: -1 }).toArray();
};
const findDocument_2 = async (collection) => {
  return await collection.find({}).sort({ created_at: 1 }).toArray();
};

const result_1 = await connectToMongoDB(findDocument_1);
const result_2 = await connectToMongoDB(findDocument_2);
console.log(result_1);
console.log(result_2);
