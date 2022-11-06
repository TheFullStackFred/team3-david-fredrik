const mongoose = require('mongoose')

const storySchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a good storyline']
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Story', storySchema)
