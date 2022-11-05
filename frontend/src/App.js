import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)

  const fetchStories = async () => {
    const response = await fetch('http://localhost:8000/api/stories')
    const data = await response.json()
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    fetchStories()
  }, [])

  return (
    data && (
      <div className='App'>
        <ol>
          {data?.map((story) => (
            <li key={story._id}>{story.stage2.first}</li>
          ))}
        </ol>
      </div>
    )
  )
}

export default App
