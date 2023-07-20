const path=require('path');
const {StatusCodes}=require('http-status-codes');
const { User,Reaction}=require(path.join(__dirname,'..','models'));



const createReaction=async(req,res)=>
{
    const reaction=await Reaction.create({
        userId:req.user.id,
        postId:req.params.id,
        state:req.body.state
    });
    res.status(StatusCodes.CREATED).json(reaction.dataValues);
};


const editReaction=async(req,res)=>
{
    let patchUpdate={};
    patchUpdate.state=req.body.state;
    await Reaction.update(patchUpdate, {where: {id:req.params.id}});
    const data=await Reaction.findOne({ where: { id: req.params.id },attributes:{exclude:['UserId','PostId']}});
    res.status(StatusCodes.OK).json(data.dataValues);
};

const deleteReaction=async(req,res)=>
{
    let reactionId=req.params.id;
    // delete reaction
    const result=await Reaction.destroy({ where: { id: reactionId }});
    res.status(StatusCodes.OK).json({msg:"reaction has been deleted"});
};

const getReactionById=async(req,res)=>
{
    const reaction=await Reaction.findOne({
        include:{
            model: User,
            attributes: ['username', 'picturePath']
        },
        where:{
            id:req.params.id
        },
        attributes:{
            exclude:['UserId','PostId']
        }
    });
    res.status(StatusCodes.OK).json(reaction);
};

const getAllReactions=async(req,res)=>
{
    const reaction=await Reaction.findAll({
        include:{
            model: User,
            attributes: ['username', 'picturePath']
        },
        where:{
            userId:req.params.id
        },
        attributes:{
            exclude:['UserId','PostId']
        }
    });
    res.status(StatusCodes.OK).json(reaction);
};

const reactionController={
    createReaction,
    editReaction,
    deleteReaction,
    getReactionById,
    getAllReactions
};

module.exports=reactionController;