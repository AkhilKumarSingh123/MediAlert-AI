// controllers/googleAuthController.js
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    console.log("Google User Verified:", payload);

    // You can save user to DB here if needed
    res.status(200).json({ user: payload, message: "Login successful" });
  } catch (error) {
    console.error("Google Token verification failed:", error);
    res.status(401).json({ error: "Invalid token" });
  }
};
