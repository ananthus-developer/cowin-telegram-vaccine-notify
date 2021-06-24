const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    centerId: {
        type: Schema.Types.String,
        required: true,
    },
    sessionId: {
        type: Schema.Types.String,
        required: true
    },
    userId: {
        type: Schema.Types.String,
        required: true
    },
    lastSentTime:{
        type:Schema.Types.Date,
        required: true
    }
});
module.exports = mongoose.model('Message', messageSchema);