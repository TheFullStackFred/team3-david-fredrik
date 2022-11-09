import { useEffect, useState } from 'react'

const Home = () => {
  const [stories, setStories] = useState(null)
  const [stage1] = useState(JSON.parse(localStorage.getItem('stage1')))
  const [stage2] = useState(JSON.parse(localStorage.getItem('stage2')))

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
          ? stories?.map((story) => {
              return (
                <div className='story-card' key={story._id}>
                  <h2
                    onClick={(e) =>
                      localStorage.setItem(
                        'stage1',
                        JSON.stringify(e.currentTarget.innerText)
                      )
                    }
                  >
                    {story.stage1.first}
                  </h2>
                </div>
              )
            })
          : 'Something went wrong'}
      </div>
      <div className='story-card'>
        {stories
          ? stories?.map((story) => {
              return (
                <div className='story-card' key={story._id}>
                  <h2
                    onClick={(e) =>
                      localStorage.setItem(
                        'stage2',
                        JSON.stringify(e.currentTarget.innerText)
                      )
                    }
                  >
                    {story.stage2.first}
                  </h2>
                </div>
              )
            })
          : 'Something went wrong'}
      </div>
      <h1>{stage1}</h1>
      <h2>{stage2}</h2>
    </div>
  )
}

export default Home
