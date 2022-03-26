import {BrowserRouter,Route,Routes } from 'react-router-dom'
//pages
import { Dashboard } from '../pages/Dashboard'
import { CharacterDetail } from '../pages/CharacterDetail'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Dashboard />} />
        <Route path="character/:id" element={ <CharacterDetail />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
