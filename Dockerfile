
# Multi-stage Dockerfile for all React applications
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files for each app and install dependencies
COPY account/package*.json ./account/
COPY Affiliat/package*.json ./Affiliat/
COPY dashboard/package*.json ./dashboard/
COPY address/package*.json ./address/
COPY set-gst-number/package*.json ./set-gst-number/
COPY set-refund/package*.json ./set-refund/
COPY wishlist/package*.json ./wishlist/

# Install dependencies for each app
RUN cd account && npm ci --only=production
RUN cd Affiliat && npm ci --only=production
RUN cd dashboard && npm ci --only=production
RUN cd address && npm ci --only=production
RUN cd set-gst-number && npm ci --only=production
RUN cd set-refund && npm ci --only=production
RUN cd wishlist && npm ci --only=production

# Copy source code for each app
COPY account/ ./account/
COPY Affiliat/ ./Affiliat/
COPY dashboard/ ./dashboard/
COPY address/ ./address/
COPY set-gst-number/ ./set-gst-number/
COPY set-refund/ ./set-refund/
COPY wishlist/ ./wishlist/

# Build each application
RUN cd account && npm run build
RUN cd Affiliat && npm run build
RUN cd dashboard && npm run build
RUN cd address && npm run build
RUN cd set-gst-number && npm run build
RUN cd set-refund && npm run build
RUN cd wishlist && npm run build

# Production stage with nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built applications to nginx serve directories
COPY --from=builder /app/account/dist /usr/share/nginx/html/account
COPY --from=builder /app/Affiliat/dist /usr/share/nginx/html/affiliate
COPY --from=builder /app/dashboard/dist /usr/share/nginx/html/dashboard
COPY --from=builder /app/address/dist /usr/share/nginx/html/address
COPY --from=builder /app/set-gst-number/dist /usr/share/nginx/html/gst
COPY --from=builder /app/set-refund/dist /usr/share/nginx/html/refund
COPY --from=builder /app/wishlist/dist /usr/share/nginx/html/wishlist

# Copy index.html for root path
COPY index.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
