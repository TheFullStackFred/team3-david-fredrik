import { useEffect, useState } from 'react'

let storys = []

const Home = () => {
  const [stories, setStories] = useState(null)
  const [isHidden1, setIsHidden1] = useState(false)
  const [isHidden2, setIsHidden2] = useState(true)
  const [isHidden3, setIsHidden3] = useState(true)
  const [isHidden4, setIsHidden4] = useState(true)
  const [isHidden5, setIsHidden5] = useState(true)
  const [btnVisible, setbtnVisible] = useState(false)
  const [storyVisible, setStoryvisible] = useState(false)

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch('http://localhost:8000/api/stories')
      const json = await response.json()

      if (response.ok) {
        setStories(json)
      }
    }

    localStorage.clear()
    fetchStories()
  }, [])

  return (
    <div className="home">
      {/* Stage 1 */}
      {!isHidden1 && (
        <div className="story-card">
          {stories
            ? stories?.map((story) => {
                if (!story.stage1) return null
                return (
                  <h2
                    key={story._id}
                    onClick={(e) => {
                      storys.push(e.currentTarget.innerText)
                      setIsHidden1(true)
                      setIsHidden2(false)
                    }}
                  >
                    {story.stage1}
                  </h2>
                )
              })
            : 'Something went wrong'}
        </div>
      )}

      {/* Stage 2 */}
      {!isHidden2 && (
        <div className="story-card">
          {stories
            ? stories.map((story) => {
                return (
                  <h2
                    key={story._id}
                    onClick={(e) => {
                      storys.push(e.currentTarget.innerText)
                      setIsHidden2(true)
                      setIsHidden3(false)
                    }}
                  >
                    {story.stage2}
                  </h2>
                )
              })
            : 'Something went wrong'}
        </div>
      )}

      {/* Stage 3 */}
      {!isHidden3 && (
        <div className="story-card">
          {stories
            ? stories.map((story) => {
                return (
                  <h2
                    key={story._id}
                    onClick={(e) => {
                      storys.push(e.currentTarget.innerText)
                      setIsHidden3(true)
                      setIsHidden4(false)
                    }}
                  >
                    {story.stage3}
                  </h2>
                )
              })
            : 'Something went wrong'}
        </div>
      )}

      {/* Stage 4 */}
      {!isHidden4 && (
        <div className="story-card">
          {stories
            ? stories.map((story) => {
                return (
                  <h2
                    key={story._id}
                    onClick={(e) => {
                      storys.push(e.currentTarget.innerText)
                      setIsHidden4(true)
                      setIsHidden5(false)
                    }}
                  >
                    {story.stage4}
                  </h2>
                )
              })
            : 'Something went wrong'}
        </div>
      )}

      {/* Stage 5 */}
      {!isHidden5 && (
        <div className="story-card">
          {stories
            ? stories.map((story) => {
                if (!story.stage5) return null
                return (
                  <h2
                    key={story._id}
                    onClick={(e) => {
                      storys.push(e.currentTarget.innerText)
                      setIsHidden5(true)
                      setbtnVisible(true)
                    }}
                  >
                    {story.stage5}
                  </h2>
                )
              })
            : 'Something went wrong'}
        </div>
      )}
      {btnVisible && (
        <button
          className="btn btn-animate2"
          onClick={() => {
            setbtnVisible(false)
            setStoryvisible(true)
          }}
        >
          See your story
        </button>
      )}

      {storyVisible && (
        <div className="story-card story-card-last">
          <h2>
            {storys[0] + ' '}
            {storys[1] + ' '}
            {storys[2] + ' '}
            {storys[3] + ' '}
            {storys[4] + ' '}
          </h2>
        </div>
      )}
    </div>
  )
}

export default Home
