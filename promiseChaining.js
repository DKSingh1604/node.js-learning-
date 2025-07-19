const cart = ["shoes", "pants", "jeans"];
// Catch function checks for error for then functions whoch are above it,
// If I put a catch function after the first then and if the car is invalid, it will still show "Payment Succesful"

//Producer
function validateCart(cart) {
  return true;
}

function createOrder(cart) {
  const pr = new Promise(function (
    resolve,
    reject
  ) {
    //create order
    //validate the cart
    //order Id
    if (!validateCart(cart)) {
      //error part
      const err = new Error("Cart is not valid.");
      reject(err);
    }
    //logic for create Order
    const orderId = "122345689";
    if (orderId && validateCart(cart)) {
      //success part
      setTimeout(function () {
        console.log(
          "You have successfully created your order."
        );
        resolve(`Your order ID: ${orderId}`);
      }, 2000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  //logic for handling payment
  return new Promise(function (resolve, reject) {
    resolve("Payment successful");
  });
}

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })

  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// HW
