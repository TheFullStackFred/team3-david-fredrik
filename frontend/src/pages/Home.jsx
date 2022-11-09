import { useEffect, useState } from 'react'

const Home = () => {
  const [stories, setStories] = useState(null)

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch('http://localhost:8000/api/stories')
      const json = await response.json()
      console.log('Stories', json)

      if (response.ok) {
        setStories(json)
      }
    }

    localStorage.clear()
    fetchStories()
  }, [])

  return (
    <div className='home'>
      <div className='story-card'>
        {stories
          ? stories?.map((story) => (
              <div className='story-card' key={story._id}>
                <h2
                  //   onClick={(e) =>
                  //     handleState(setStage1(e.currentTarget.innerText))
                  //   }
                  onClick={(e) =>
                    localStorage.setItem(
                      'story',
                      JSON.stringify(e.currentTarget.innerText)
                    )
                  }
                >
                  {story.stage1.first}
                </h2>
              </div>
            ))
          : 'Something went wrong'}
      </div>

      {stories
        ? stories?.map((story) => (
            <div className='story-card' key={story._id}>
              <h2
                onClick={(e) =>
                  localStorage.setItem(
                    'story',
                    JSON.stringify(e.currentTarget.innerText)
                  )
                }
              >
                {story.stage1.first}
              </h2>
            </div>
          ))
        : 'Something went wrong'}
    </div>
  )
}

export default Home
