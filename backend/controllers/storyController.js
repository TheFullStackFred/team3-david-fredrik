const asyncHandler = require('express-async-handler')

const Story = require('../models/storyModel')

// Get stories
// GET /api/stories
const getStories = asyncHandler(async (req, res) => {
  const stories = await Story.find({})
  res.status(200).json(stories)
})

// Add story
// POST /api/stories
const addStory = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const story = await Story.create({
    text: req.body.text
  })

  res.status(200).json(story)
})

// Update story
// PUT /api/stories/:id
const updateStory = asyncHandler(async (req, res) => {
  const story = await Story.findById(req.params.id)

  if (!story) {
    res.status(400)
    throw new Error('Story not found')
  }

  const updatedStory = await Story.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  {
    res.status(200).json(updatedStory)
  }
})

// Delete story
// Delete /api/stories/:id
const deleteStory = asyncHandler(async (req, res) => {
  const story = await Story.findById(req.params.id)

  if (!story) {
    res.status(400)
    throw new Error('Story not found')
  }

  await story.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = { getStories, addStory, updateStory, deleteStory }
