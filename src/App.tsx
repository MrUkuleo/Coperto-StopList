import './styles/App.css'
import MenuList from './components/MenuList'
import StopList from './components/StopList'

function App() {
  return (
    <>
    <main>
      <h1>СТОП-ЛИСТ КУХНИ</h1>
      <h3>Сделал Лев Хрущов для Coperto™ :3</h3>  

      <div className="main-section">
        <MenuList/>
        <StopList/>
      </div>
      
    </main>
    
    </>
  )
}

export default App
