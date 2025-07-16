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

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) =>
    showOrderSummary(paymentInfo)
  )
  .then((paymentInfo) =>
    updateBalance(paymentInfo)
  );
