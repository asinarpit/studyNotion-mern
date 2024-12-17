const Tag = require("../models/tags");

// create tag handler function

exports.createTag = async (req,res)=>{
    try{
        // fetch data
        const {name, description} = req.body;
        
        // validating the data
        if(!name || !description) {
            return res.status(400).json({
                success:false,
                message:"All fields are required" 
            })
        }

        // create entry in BD
        const tagDetails = await Tag.create({
            name: name,
            description: description
        });
        console.log(tagDetails);


        return res.status(200).json({
            success:true,
            message:"Tag created successfully"
        })



    }

    catch(error){
        res.status(500).json({
            success:false,
            message: error.message

        })
    }

}

// get all tags handler function
exports.showAllTags = async(req,res) =>{
    try{
        const allTags =  await Tag.find({}, {name:true, description:true});
        res.status(200).json({
            success:true,
            message:"All tags returned successfully",
            allTags
        })

    }

    catch(error){
        res.status(500).json({
            success:false,
            message: error.message

        })
    

    }
}
