import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import './../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-row'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mini-React Projects</h1>
      <div className='flex flex-col gap-3'>
        <Link to='/todo-list'><button className='link'>To-Do List</button></Link>
        <Link to='/weather-dashboard'><button className='link'>Weather Dashboard</button></Link>
        <Link to='/image-gallery'><button className='link'>Image Gallery</button></Link>
        <Link to='/task-dashboard'><button className='link'>Task Dashboard</button></Link>
      </div>
      <p className="read-the-docs">
        Portfolio to showcase React and web development skills and learnings
      </p>
    </div>
  )
}

export default Home
