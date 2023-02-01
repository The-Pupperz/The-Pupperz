const { Schema, Types } = require('mongoose');

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
        // replyId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId()
        // },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);


module.exports = replySchema;