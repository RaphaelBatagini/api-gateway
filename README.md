# API Gateway

## Tech Stack
- Kong API Gateway
- NodeJS Backend
- Redis Cache
- PostgreSQL

## Setup
1. Clone
2. Populate a new .env
3. Run api gateway migrations:
```sh
npm run gateway:migrate
```
4. Start the application:
```sh
npm run dev
```

## Resources:
- Kong Proxy - [http://localhost:8000](http://localhost:8000)
- Kong Admin API - [http://localhost:8001](http://localhost:8001)
- Kong UI - [http://localhost:8899](http://localhost:8899)
- Keycloak - [http://localhost:8080/admin/](http://localhost:8080/admin/)
- API - [http://localhost:3000](http://localhost:3000)