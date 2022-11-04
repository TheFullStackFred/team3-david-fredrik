import { useState, useEffect } from 'react'
function App() {
  const [data, setData] = useState(null)

  //   Testing fetch from frontend and it works :)
  useEffect(() => {
    fetch('http://localhost:8000/api/stories')
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        console.log('data', result)
      })
  }, [])

  return (
    data && (
      <div className='App'>
        {data[1].stage2.option1}
        {/* <ol>
        {data?.map((story) => (
          <li key={story._id}>{story.stage2.option1}</li>
        ))}
      </ol> */}
      </div>
    )
  )
}

export default App
// data[1].stage2.option1
