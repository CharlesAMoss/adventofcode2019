const express = require('express');
const router = express.Router();

const dayone = require('../controllers/dayone')
const daytwo = require('../controllers/daytwo')

router.get("/", (req, res) => {
    //res.json({ status: "success", message: "Welcome To Testing API" });
    res.status(200).render("home" , {
      message: "success"
    })
    next();
  });
  
router.post("/add", (req, res) => {
    const { num1, num2 } = req.body;
  
    const add = (num1, num2) => {
      return num1 + num2;
    };

    res.status(200).render("add" , {
      message: "success",
      result: add(num1, num2),
      properties: [num1,num2]
    })
});

router.get("/dayone", (req, res) => {
  const title = dayone.title();
  res.status(200).json({ status: "success", message: title});

});

// router.get("/dayone/:mass", (req, res) => {
//   const title = dayone.fuelCalculator(req.params.mass);
//   res.status(200).json({ status: "success", message: title});

// });

router.get("/dayone/total", (req, res) => {
  const total = dayone.fuelTotal();
  res.status(200).json({ status: "success", message: total});
});

router.get("/daytwo", (req, res) => {
  const title = daytwo.title();
  res.status(200).json({ status: "success", message: title});
  next();
});

router.get("/daytwo/intcode", (req, res) => {
  const { noun, verb } = req.body,
    title = daytwo.intcodePatchProgram(noun, verb);
  res.status(200).json({ status: "success", message: title});
});

router.get("/daytwo/findPatch", (req, res) => {
  const title = daytwo.intercodeHarness();
  res.status(200).json({ status: "success", message: title});
});




  module.exports = router;

  