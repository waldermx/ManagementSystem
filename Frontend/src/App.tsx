import './App.css'

function App() {
  
  const handleClick = async () => {
    try {
      const response = await fetch(`/weatherforecast`)
      const data = await response.json()
      console.log('Respuesta del backend:', data)
    } catch (error) {
      console.error('Error al conectar con el backend:', error)
    }
  }
  return (
    <>
      <button onClick={handleClick}>Click aquí para mandar petición a backend</button>
    </>
  )
}

export default App
