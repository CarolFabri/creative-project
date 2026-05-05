const mongoose = require ('mongoose');

const notificationSchema = new mongoose.Schema({
    userToNotify: {
        type: String,
        required: true
    },
    fromUser:{
        type: String,
        required:true
    },
    type:{
        type: String,
        enum: ['like', 'comment'],
        required: true,
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;