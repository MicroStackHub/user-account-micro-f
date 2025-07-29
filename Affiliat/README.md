# Affiliat Project

## Docker Setup

This project includes Docker configuration for both development and production environments.

### Prerequisites

- Docker
- Docker Compose

### Development Environment

To run the application in development mode:

```bash
# Start the development server
docker-compose up affiliat-dev
```

This will start the application with hot-reloading enabled at http://localhost:5174

### Production Environment

To build and run the application in production mode:

```bash
# Start the production server
docker-compose up affiliat-prod
```

This will build the application and serve it using Nginx at http://localhost:8080

### Building for Production

To build the Docker image for production:

```bash
docker build -t affiliat:latest .
```

### Running the Production Image

To run the production image directly:

```bash
docker run -p 8080:80 affiliat:latest
```

## Manual Setup

If you prefer to run the application without Docker:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
