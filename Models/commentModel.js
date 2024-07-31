const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    receipt: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;