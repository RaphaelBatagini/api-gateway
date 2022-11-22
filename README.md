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