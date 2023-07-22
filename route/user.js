const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {signinUser, signupUser} = require('../controllers/user');

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please Provide valid email address").isEmail(),
    check("password", "please enter atleast 6 characters").isLength({ min: 6 }),
  ],
  signupUser
);

router.post(
  "/signin",
  [
    check("email", "Please Provide valid email address").isEmail(),
    check("password", "please enter atleast 6 characters").isLength({ min: 6 }),
  ],
  signinUser
);

module.exports = router;