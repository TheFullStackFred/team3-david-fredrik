import { useEffect, useState } from 'react'

const Home = () => {
  const [stories, setStories] = useState(null)

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch('http://localhost:8000/api/stories')
      const json = await response.json()
      console.log(json)

      if (response.ok) {
        setStories(json)
      }
    }

    fetchStories()
  }, [])

  return (
    <div className='home'>
      <div className='stories'>
        {stories
          ? stories?.map((story) => (
              <div className='story' key={story._id}>
                <h2>{story.stage1.first}</h2>
              </div>
            ))
          : 'Something went wrong'}
      </div>
    </div>
  )
}

export default Home
