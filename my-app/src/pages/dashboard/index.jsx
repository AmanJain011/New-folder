import { useLocation } from 'react-router-dom';
import './style.css';

const Dashboard = () => {
  const variable = useLocation()

  return (
    <>
      <header className='header4'>
        {
          variable.pathname === "/college-dashboard" ? <h1 className='h14'>College Dashboard</h1> : <h1 className='h14'>Company Dashboard</h1>
        }
      </header>

      <nav className='nav4'>
        <button>Profile</button>
        <button>My Projects</button>
        <button>Add Project</button>
        <button>Add Innovations</button>
        <button>History</button>
      </nav>

      <section className='section4'>
        <h2>Welcome to Your College Dashboard</h2>
        <p>Select an option from the navigation menu to get started.</p>
      </section>

      <footer className='footer4'>
        &copy; 2023 Your College. All rights reserved.
      </footer>
    </>
  );
}

export default Dashboard;
