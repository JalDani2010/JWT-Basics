const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");

const authMiddleware = require("../middleware/auth");
router.post("/login", login);
router.route("/dashboard").get(authMiddleware, dashboard);
module.exports = router;
