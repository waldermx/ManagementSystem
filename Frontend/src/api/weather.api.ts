// src/api/weather.api.ts
import { httpClient } from "./httpClient";

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
}

export const getWeatherForecast = () =>
  httpClient<WeatherForecast[]>("/weatherforecast");
