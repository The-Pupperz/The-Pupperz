const { Schema, model } = require('mongoose');

const replySchema = new Schema(
    {
        
        replyBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        name: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);

const Reply = model('Reply', replySchema);

module.exports = Reply;