const News = require('../Models/news.model');

exports.addNews = async (req,res,next)=>{
    
    try {
        const {Title, Description, Date} = req.body;
        const newNews = new News ({Title, Description, Date});
        await newNews.save();

        return res.status(201).json({
            success: true,
             newNews
        })
    } catch (error) {
        return res.status(500).json({
           Success: false,
            message: 'An Error occurred'
        })
    }
}

