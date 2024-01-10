import { connectToMongoDB } from "./connectToMongoDB.js";
const findDocument_1 = async (collection) => {
  return await collection.find({ quantity: { $lte: 5 } }).toArray();
};
const findDocument_2 = async (collection) => {
  return await collection
    .find({
      $and: [{ quantity: { $gte: 1, $lte: 5 } }, { size: "small" }],
    })
    .sort({ created_at: 1 })
    .toArray();
};
const findDocument_3 = async (collection) => {
  return await collection
    .find({
      $and: [{ quantity: { $gt: 10 } }, { credit_card_type: null }],
    })
    .sort({ created_at: 1 })
    .toArray();
};

const result_1 = await connectToMongoDB(findDocument_1);
const result_2 = await connectToMongoDB(findDocument_2);
const result_3 = await connectToMongoDB(findDocument_3);
// console.log(result_3);
// console.log(result_2);
//console.log(result_3)
