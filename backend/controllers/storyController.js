const asyncHandler = require('express-async-handler')

// Get stories
// GET /api/stories
const getStories = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get stories' })
})

// Add story
// POST /api/stories
const addStory = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Add story' })
})

// Update story
// PUT /api/stories/:id
const updateStory = asyncHandler(async (req, res) => {
  {
    res.status(200).json({ message: `Update story ${req.params.id}` })
  }
})

// Delete goal
// Delete /api/stories/:id
const deleteStory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete story ${req.params.id}` })
})

module.exports = { getStories, addStory, updateStory, deleteStory }
