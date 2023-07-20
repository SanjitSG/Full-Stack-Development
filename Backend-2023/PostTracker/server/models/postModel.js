import mongoose from 'mongoose';
// const { Schema } = mongoose;

const postSchema = mongoose.Schema(
  {
    username: {
      //validation
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//exporting the schema
const Post = mongoose.model('Post', postSchema);
export default Post;
