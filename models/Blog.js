const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  headline: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  favorites: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
          }
        }
      ],
      date: {
        type: Date,
        default: Date.now,
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);
