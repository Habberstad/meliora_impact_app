import { Router } from "express";
import { ObjectId } from "mongodb";
import Account from "../models/orgAccountModel.js";




const router = Router();

router.get("/", async (req, res) => {

  const { _id } = req.query;
  console.log("test", _id);
  Account.findById(_id, function(err, data) {
    if (err) {
      res.redirect("http://localhost:3000/wrapped");
    } else {
      res.send(data);
    }
  });

});


router.post("/", async (req, res) => {

    console.log(req.body)
    const account =  new Account({ org_name: "halla" });

    await account.save(function(err,saved) {
      console.log(err)
      if (err) {
        console.log("Error: validation failed")
        res.send({error:"could not save"});
      } else  {
        console.log("Saved")
        res.send(saved);
      }
    })


});

router.get("/exist", async (req, res) => {
  const google_id = req.query.value;
  const account = await Account.find({ google_id });


  if (account !== undefined)
    res.redirect("/logout");
  else
    res.redirect("/createAccount");

});


export default router;