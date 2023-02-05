const { Schema, model } = require("mongoose");
const Reply = require('./Reply');



const postSchema = new Schema(
    {
        
        postBody: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,

        },
        name: {
            type: String,
            required: true
        },
        replies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reply'
            }
        ]
        
    },
    // {
    //     toJSON: {
    //         // getters
    //     },
    //     id: false
    // }
);



const Post = model('Post', postSchema);


module.exports = Post;
