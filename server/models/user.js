import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: false,
      required: true,
    },
    passwordHash: {
      type: String,
      unique: false,
      required: true,
    },
    type: {
      type: String,
      unique: false,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider'
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
