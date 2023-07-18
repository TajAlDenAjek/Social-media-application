const createReaction={
    tags:["Reactions"],
    description:`create reaction for a post giving the post id</br >
    you must be authorized </br>
    <h3> Note 1: send token in bearer </h3>`,
    security: [{
        bearerAuth: []
    }],
    requestBody:{  
        required:true,
        content:{
            "application/json":{
                schema:{
                    type:"Object",
                    example:[
                        {
                            "state": "dislike"
                        },
                        {
                            "state":"like"
                        }
                    ]
                }
            }
        },
    },
    parameters:[
        {
          "name": "id",
          "in": "query",
          "type": "integer",
          "required": true
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "post": [
                              "post not found"
                            ]
                        }
                    }
                }
            }
        },
        201:{
            description:"CREATED",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "createdAt": "2023-07-18T11:11:59.607Z",
                            "updatedAt": "2023-07-18T11:11:59.611Z",
                            "id": 4,
                            "userId": 1,
                            "postId": "9",
                            "state": "dislike"
                        }
                    }
                }
            }
        },
        400:{
            description:"bad request",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:[
                            {
                                "id": [
                                    "The id must be a number."
                                ]
                            },
                            {
                                "state": [
                                  "The selected state is invalid."
                                ]
                            }
                        ]
                    }
                }
            }
        },
        401:{
            description:"Unauthorized",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "Authentication invalid"
                        }
                    }
                }
            }
        },
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "You can only react on your posts or your friends posts"
                        }
                    }
                }
            }
        },
        409:{
            description:"Conflict",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "reaction": [
                              "you have already reacted to this post"
                            ]
                        }
                    }
                }
            }
        },
    }
}













const reaction={
    createReaction,
    // editReaction,
    // deleteReaction,
    // getReactionById,
    // getAllReactionsById
}


module.exports=reaction;