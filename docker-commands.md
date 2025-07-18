
# Docker Commands Reference

## Development (Recommended for Local Development)
```bash
# Start all applications in development mode
docker-compose up

# Start specific applications
docker-compose up account-dev affiliate-dev

# Build and start with forced rebuild
docker-compose up --build

# Run in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f account-dev
```

## Production Build
```bash
# Build production image
docker build -t multi-app-hub .

# Run production container
docker run -p 3000:80 multi-app-hub

# Run with custom nginx config
docker run -p 3000:80 -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf multi-app-hub
```

## Useful Commands
```bash
# View running containers
docker ps

# Remove all containers and images
docker system prune -a

# Check container logs
docker logs <container_id>

# Execute commands in running container
docker exec -it <container_id> /bin/sh
```

## Environment Variables
You can customize ports and other settings using environment variables:

```bash
# Custom ports for development
ACCOUNT_PORT=5173 AFFILIATE_PORT=5174 docker-compose up
```

## Notes
- Development mode uses hot reloading with volume mounts
- Production mode serves static built files through nginx
- All applications are accessible through the main hub at http://localhost:3000
