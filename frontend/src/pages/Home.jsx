import { useEffect, useState } from 'react'

const Home = () => {
  const [stories, setStories] = useState(null)
  const [isHidden1, setIsHidden1] = useState(false)
  const [isHidden2, setIsHidden2] = useState(false)
  const [stage1] = useState(JSON.parse(localStorage.getItem('stage1')))
  const [stage2] = useState(JSON.parse(localStorage.getItem('stage2')))
  const [stage3] = useState(JSON.parse(localStorage.getItem('stage3')))
  const [stage4] = useState(JSON.parse(localStorage.getItem('stage4')))

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
      {!isHidden1 && (
        <div className='story-card'>
          {stories
            ? stories?.map((story) => {
                return (
                  <h2
                    key={story._id}
                    onClick={(e) => {
                      localStorage.setItem(
                        'stage1',
                        JSON.stringify(e.currentTarget.innerText)
                      )
                      setIsHidden1(true)
                      setIsHidden2(true)
                    }}
                  >
                    {story.stage1.first}
                  </h2>
                )
              })
            : 'Something went wrong'}
        </div>
      )}

      {isHidden2 && (
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
      )}

      <h1>{stage1}</h1>
      <h2>{stage2}</h2>
    </div>
  )
}

export default Home
