import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="nf">
    <h1>Oops! You seem to be lost here.</h1>
    <p>Let's take you back home</p>
    <Link to='/'>Home</Link>
</div>
  )
}

export default NotFound
