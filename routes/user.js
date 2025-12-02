const router =require("express").Router();

router.get("/getmethod",(req,res)=>{

      res.send("rest Api get method is working now 7567576!");

});
router.post("/postmethod",(req,res)=>{

     const company_name = req.body.company_name;
     const name = req.body.name;
     const mobile = req.body.mobile;
     const email= req.body.email;
     const country = req.body.country;
     //console.log(company_name);

     res.send("Compnay Name=:"+company_name+ "\n name=:"+name + "\n mobile=:"+mobile +"\n email=:"+ email +"\n country=:"+country);

});

module.exports = router;



