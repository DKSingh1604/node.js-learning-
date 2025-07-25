const cart = ["shoes", "pants", "jeans"];

createOrder(cart, function (orderId) {
  proceedToPayment(
    orderId,
    function (paymentInfo) {
      showOrderSummary(paymentInfo, function () {
        updateBalance();
      });
    }
  );
});
//creacting a promise
const promise = createOrder(cart);

// another way
//overcoming of callback hell - promise
//overcoming of pyramid of doom - promise chaining
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (orderId) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateBalance();
  });

// OR

createOrder(cart)
  .then((orderId) => proceedToPayment(orderID))
  .then((paymentInfo) =>
    showOrderSummary(paymentInfo)
  )
  .then((paymentInfo) => updateBalance());
