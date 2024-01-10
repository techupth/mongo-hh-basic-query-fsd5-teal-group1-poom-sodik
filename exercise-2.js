import { connectToMongoDB } from "./connectToMongoDB.js";
const findDocument = async (collection) => {
  return await collection.findOne(
    {
      customer_name: "Zoe",
    },
    { projection: { total_price: 1, customer_name: 1 } }
  );
};

const result = await connectToMongoDB(findDocument);
console.log(result);
