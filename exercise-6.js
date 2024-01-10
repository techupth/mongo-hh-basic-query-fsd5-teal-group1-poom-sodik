db.pizzaOrders.updateMany(
  { customer_name: "Jack" },
  { $set: { isAdmin: false } }
);

db.pizzaOrders.updateMany({}, { $set: { country: "Thailand" } });

db.pizzaOrders.updateOne(
  { customer_name: "M" },
  {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: "2022-01-01T10:48:40Z",
    },
  },
  { upsert: true }
);
// acknowledged: true,
// insertedId: ObjectId('659e3da0f7582687e705b8ee'),
// matchedCount: 0,
// modifiedCount: 0,
// upsertedCount: 1
