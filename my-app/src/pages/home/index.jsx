import { Link } from 'react-router-dom';
import './style.css'; // Make sure to import your stylesheet

const Home = () => {
  return (
    <div>
      <nav className='nav1'>
        <div className="menu1">
          <div className="logo1">
            <a href="#">Campus Innovations!</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </nav>
      <div className="img1"></div>
      <div className="center1">
        <div className="btns1">
          <button><Link to='/explore' className='link'>Explore</Link></button>
          <button><Link to='/login' className='link'>Log In</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
