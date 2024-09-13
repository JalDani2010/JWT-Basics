const CustomAPIError = require("../errors/custom-error");

const jwt = require("jsonwebtoken");

const authentificationmiddleware =  async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.status(401).json({ msg: "JWT token is missing" });
  }
  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Not Authorized to access this route" });
  }
}

module.exports = authentificationmiddleware; 