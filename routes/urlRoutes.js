const express=require("express");

const router=express.Router();

const {
    shortUrl,
    redirectUrl
}=require("../controllers/urlControllers");
router.post("/shorten",shortUrl);
router.get("/:code",redirectUrl);
module.exports=router;


// const express=require("express");
// const router=express.Router();

// const{
//     shortUrl,
//     redirectUrl
// }=router("../controllers/urlControllers");

// router.post("/shorten",shortUrl);
// router.get("/:code",redirectUrl);
// module.exports=router;