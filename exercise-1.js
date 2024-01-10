db.pizzaOrders.findOne({ customer_name: "Cherlyn" });

// _id: ObjectId('659e2a98363873837a2e5336'),
// size: 'medium',
// total_price: 4627.41,
// quantity: 12,
// customer_name: 'Cherlyn',
// credit_card_type: 'mastercard',
// created_at: 2021-06-27T23:57:12.000Z

db.pizzaOrders.find({ credit_card_type: "mastercard" });

db.pizzaOrders.find({ size: "medium" }).limit(5);
