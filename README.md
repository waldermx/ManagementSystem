# ManagementSystem

Esqueleto de despliegue para una aplicación de gestión: API en ASP.NET Core, frontend en React +
Vite servido por nginx y SQL Server, todo orquestado con Docker Compose.

> **Estado:** el andamiaje de infraestructura funciona; la lógica de negocio no existe todavía.
> La API sigue siendo la plantilla de .NET (`WeatherForecastController`).

## Qué resuelve

- **Contenedores por servicio:** `api`, `frontend` (build multi-etapa, nginx) y `db` (SQL Server
  2022) en una red privada de Compose.
- **Imagen publicada automáticamente:** `.github/workflows/docker-publish.yml` construye la imagen
  del backend y la sube a Docker Hub en cada push.
- **Dos entornos:** `docker-compose.yml` usa la imagen publicada; `docker-compose.local.yml`
  construye todo desde el código para desarrollo.
- **Configuración por entorno:** la URL de la API llega al frontend por `VITE_API_BASE_URL` y la
  API lee sus secretos de `.env`.

## Uso

```bash
cp .env.example .env              # si no existe, definir cadena de conexión y VITE_API_BASE_URL
docker compose -f docker-compose.local.yml up --build
```
