const { Schema, model } = require("mongoose");
const replySchema = require('./Reply');
const moment = require('moment');


const postSchema = new Schema(
    {
        postBody: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 280
        },
        createdAt: {
            type: String,
            default: moment().format('MMMM Do YYYY, h:mm:ss a')

        },
        username: {
            type: String,
            required: true
        },
        replies: [replySchema]
    },
    {
        toJSON: {
            getters
        },
        id: false
    }
);

const Post = model('Post', postSchema);


module.exports = Post;