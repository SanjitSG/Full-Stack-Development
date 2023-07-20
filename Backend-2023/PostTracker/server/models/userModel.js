import mongoose from 'mongoose';
// const { Schema } = mongoose;

const userSchema = mongoose.Schema(
  {
    username: {
      //validations
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: [5, 'Enter at least 5 characters'],
    },
  },
  {
    timestamps: true,
  }
);

//exporting the schema
const User = mongoose.model('User', userSchema);
export default User;
