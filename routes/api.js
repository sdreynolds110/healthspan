const express = require("express");
const router = express.Router();

const HealthRecord = require("../models/healthrecord")

router.get("/", (req, res) => {
    HealthRecord.find({ })
      .then((data) => {
        console.log("Data: ", data);
        res.json(data);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
});
router.post("/save", (req, res) => {
    console.log("Body:", req.body);
    res.json(data);
        msg: "The data you've entered has been submitted"
});
router.get("/name", (req, res) => {
    const data = {
      name: "John Doe",
      gender: "Male",
      age: "46",
      medications: false,
      center: "St. Mary's Hospital",
      operation: true,
      diagnosis: "ACL Reconstructive Surgery"
    };
    res.json(data);
});

module.exports = router;