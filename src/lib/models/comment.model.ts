import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    // id: { type: String, required: true },
    remarks: { type: String, required: true },
    movie_id:{type:String, required:true}
    // email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    // isAdmin: { type: Boolean, default: false, required: true },
    // profilePic: { type: String },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema)
export default Comment;
