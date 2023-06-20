const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { authtoken } = req.headers;
  console.log("authtoken", authtoken);

  if (!authtoken) {
    return res.status(404).send("Access denied!");
  }

  try {
    const verified = jwt.verify(authtoken, process.env.JWT_SECRET);
    console.log("verified", verified);
    next();
  } catch (err) {
    console.log(err);
    if (err instanceof Error && err.name === "JsonWebTokenError") {
      return res.status(401).send("No valid token");
    }
    res.status(500).send(err.message);
  }
};

module.exports = auth;
