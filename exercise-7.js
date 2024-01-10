db.pizzaOrders.deleteMany({ customer_name: "Jack" });
// {
//     acknowledged: true,
//     deletedCount: 1
//   }
db.pizzaOrders.find({ customer_name: "Jack" });
