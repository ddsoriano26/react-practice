import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import TodoList from './components/TodoList'
import WeatherDashboard from './components/WeatherDashboard'
import ImageGallery from './components/ImageGallery'

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo-list' element={<TodoList />} />
            <Route path='/weather-dashboard' element={<WeatherDashboard />} />
            <Route path='/image-gallery' element={<ImageGallery />} />
        </Routes>
    </div>
  )
}

export default App
