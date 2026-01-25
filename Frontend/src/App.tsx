import './App.css'
import type { WeatherForecast } from "./api/weather.api";
import { getWeatherForecast } from "./api/weather.api";

function App() {
  
  const handleClick = async () => {
    try {
      const data: WeatherForecast[] = await getWeatherForecast();
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
