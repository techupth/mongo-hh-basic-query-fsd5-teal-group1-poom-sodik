import { connectToMongoDB } from "./connectToMongoDB.js";
const findDocumentEx1_1 = async (collection) => {
  return await collection.findOne({
    customer_name: "Cherlyn",
  });
};
const findDocumentEx1_2 = async (collection) => {
  return await collection
    .find({
      credit_card_type: "mastercard",
    })

    .toArray();
};
const findDocumentEx1_3 = async (collection) => {
  return await collection
    .find({
      size: "medium",
    })
    .limit(5)
    .toArray();
};
const result1_1 = await connectToMongoDB(findDocumentEx1_1);
const result1_2 = await connectToMongoDB(findDocumentEx1_2);
const result1_3 = await connectToMongoDB(findDocumentEx1_3);

console.log(result1_1);
console.log(result1_2);
console.log(result1_3);
