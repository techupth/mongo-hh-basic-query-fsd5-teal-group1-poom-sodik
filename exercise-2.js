db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { total_price: 1, customer_name: 1 }
);
// _id: ObjectId('659e2a98363873837a2e533c'),
//   total_price: 7901.57,
//   customer_name: 'Zoe'
