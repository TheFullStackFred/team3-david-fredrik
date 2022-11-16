import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="nf">
      <h1>Oops! You seem to be lost here.</h1>
      <img
        src="https://www.whats-on-netflix.com/wp-content/uploads/2017/12/banner1-Lost-620x351.jpg"
        alt="David"
      />
      <p>Let's take you back home</p>
      <p>
        <button className="home-button">
          <Link to="/">Home</Link>
        </button>
      </p>
    </div>
  )
}

export default NotFound
