import { Link } from 'react-router-dom';
import './style.css'; // Make sure to import your stylesheet

const Home = () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
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
      <div className="img"></div>
      <div className="center">
        <div className="btns">
          <button><Link to='/explore' className='link'>Explore</Link></button>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
