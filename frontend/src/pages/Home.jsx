import { useEffect, useState } from 'react'

const Home = () => {
  const [stories, setStories] = useState(null)
  const [desc, setDesc] = useState('')

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

  const handleState = (e) => {
    // console.log(e.currentTarget.innerText)
    console.log(desc)
  }

  return (
    <div className='home'>
      <div className='stories'>
        {stories
          ? stories?.map((story) => (
              <div className='story' key={story._id}>
                <h2
                  onClick={(e) =>
                    handleState(setDesc(e.currentTarget.innerText))
                  }
                >
                  {story.stage1.first}
                </h2>
              </div>
            ))
          : 'Something went wrong'}
      </div>
    </div>
  )
}

export default Home
