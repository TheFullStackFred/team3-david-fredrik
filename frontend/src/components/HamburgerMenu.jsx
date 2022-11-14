import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
  return (
    <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
      <div class="hamburger">
        <div></div>
      </div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
