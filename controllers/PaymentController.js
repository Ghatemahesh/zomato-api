let Razorpay = require("razorpay");

module.exports.getOrderID = (request, responce) => {
  let {amount} = request.body
  var instance = new Razorpay({
    key_id: "rzp_test_gxPyLR1dtP1T5d",
    key_secret: "JeT5ypJph7yNQcB7bijAAzmN",
  });

  var options = {
    amount: Number(amount) * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      responce.status(500).send({ status: false });
    } else {
      responce.status(200).send({ status: true, order });
    }
  });
};

module.exports.verifyPayment = (request, responce) => {
  let {razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    request.body;
  let body = razorpay_order_id + "|" + razorpay_payment_id;

  var crypto = require("crypto");
  var expectedSignature = crypto
    .createHmac("sha256", "JeT5ypJph7yNQcB7bijAAzmN")
    .update(body.toString())
    .digest("hex");
  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);
  var message = { status: false };
  if (expectedSignature === razorpay_signature) message = { status: true };
  responce.send(message);
};
