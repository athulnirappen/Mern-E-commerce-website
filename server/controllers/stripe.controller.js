import Stripe from "stripe";
import dotenv from "dotenv";


dotenv.config();

const stripeSecretKey = process.env.SECRET_STRIPE_KEY;
if (!stripeSecretKey) {
  throw new Error("SECRET_STRIPE_KEY environment variable is not set");
}
const stripeInstance = new Stripe(stripeSecretKey, {
  apiVersion: "2022-11-15",
});

export const StripePayment = async (req, res) => {
  try {
    // console.log("Checkout request received:", req.body.items);
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error during checkout:", error.message);
    res.status(500).json({ error: error.message });
  }
};



