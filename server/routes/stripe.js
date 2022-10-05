const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
const Stripe = require("stripe");
const stripe = Stripe(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
  stripe.checkout.sessions.create({
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
    line_items: [{ price: "price_H5ggYwtDq4fbrJ", quantity: 2 }],
    mode: "payment",
  });
});

module.exports = router;
