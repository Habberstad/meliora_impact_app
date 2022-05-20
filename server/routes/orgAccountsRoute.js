import { Router } from "express";
import { ObjectId } from "mongodb";
import Account from "../models/orgAccountModel.js"


const router = Router();

router.get("/",  async (req, res) => {

  const { _id }= req.query
  console.log("test",_id)
  OrgAccount.findById(_id, function (err, data) {
    if (err){
      res.redirect("http://localhost:3000/wrapped")
    }
    else{
      res.send(data);
    }
  });

})


router.post("/", (req, res) => {
  console.log(req.body.org_name)
  const account = new Account({
    org_name: req.query.org_name
  })

  console.log(account)

  res.send(account)
})




export default router;