import {BrowserRouter,Route,Routes } from 'react-router-dom'
//pages
import { Dashboard } from '../pages/Dashboard'
import { Detail } from '../pages/Detail'
import { Collection } from '../pages/Collection'
import { Favorites } from '../pages/Favorites'
//components
import { Header } from '../components/Header'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Dashboard />} />
        <Route path="character/:id" element={ <Detail />} />
        <Route path="favorites" element={ <Favorites />} />
        <Route path="collections" element={ <Collection />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
