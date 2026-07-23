const Url=require("../models/url");
const shortid=require("shortid");

const shortUrl=async(req,res)=>{
    try{
        const {originalUrl}=req.body;
        const shortCode=shortid.generate();
        const newUrl=new Url({
            originalUrl,
            shortCode
        });
        await newUrl.save();
        res.json({
            shortUrl:`http://localhost:3000/${shortCode}`
        });

    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

const redirectUrl=async(req,res)=>{
    try{
        const foundUrl=await Url.findOne({
            shortCode:req.params.code
        });
        if(!foundUrl){
            return res.status(404).json({
                message:"URL not found"
            });
        }
        res.redirect(foundUrl.originalUrl);

    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};

module.exports={
    shortUrl,
    redirectUrl
};
