const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");


if(process.env.Node_ENV === "development"){
  router.post("/create", async(req, res) => {
    let owners= await ownerModel.find()
    if (owners.length > 0) {
      return res
      .send(500)
      .send("you dont have permmision new owner!");
    }
    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
      fullname, 
      email, 
      password,
    });

    // res
    // .status(201)
    // .send("createdOwner");
    
  });
}

router.get("/", (req, res) => {
  res.send("route working!");
});




module.exports = router;
