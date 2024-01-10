import { connectToMongoDB } from "./connectToMongoDB.js";
const Document_1 = async (collection) => {
  return await collection.deleteMany({ customer_name: "Jack" });
};

const result = await connectToMongoDB(Document_1);

console.log(result);
